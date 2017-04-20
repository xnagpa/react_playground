import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  pagination: {
    page: 1,
    perPage: 2,
    totalCount:0
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return assign({},initialState, { isFetching: true });
    case 'FETCH_POSTS_ERROR':
      return assign({},initialState, { error: true });
    case 'FETCH_POSTS_SUCCESS':
      return assign({},initialState, {
        entries: action.response['entries'],
        pagination: action.response['pagination']
      });
    default:
      return state;
  }
}
