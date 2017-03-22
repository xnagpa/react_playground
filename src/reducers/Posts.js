import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return assign({},initialState, { isFetching: true });
    case 'FETCH_POSTS_ERROR':
      return assign({},initialState, { error: true });
    case 'FETCH_POSTS_SUCCESS':
      return assign({},initialState, { entries: action.response });
    default:
      return state;
  }
}