import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};


export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POST_REQUEST':
      return assign({},initialState, { isFetching: true });
    case 'FETCH_POST_ERROR':
      return assign({},initialState, { error: true });
    case 'FETCH_POST_SUCCESS':
      return assign({},initialState, { entry: action.response });
    default:
      return state;
  }
}
