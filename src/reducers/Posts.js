import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return assign({},state, { isFetching: true });
    case 'FETCH_POSTS_ERROR':
      return assign({},state, { error: true });
    case 'FETCH_POSTS_SUCCESS':
      return assign({},state, { entries: action.response });
    default:
      return state;
  }
}
