import { assign } from 'lodash/object';

const initialState = {
  isUpdating: false,
  isFetching: false,
  error: false,
  entries: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COMMENTS_REQUEST':
      return assign({},initialState, { isFetching: true });
    case 'FETCH_COMMENTS_ERROR':
      return assign({},initialState, { error: true });
    case 'FETCH_COMMENTS_SUCCESS':
      return assign({},initialState, { entries: action.response });

    case 'CREATE_COMMENT_REQUEST':
      return assign({},initialState, { isUpdating: true });
    case 'CREATE_COMMENT_ERROR':
      return assign({},initialState, { error: true });
    case 'CREATE_COMMENT_SUCCESS':
      return assign({},initialState, { entries: action.response });

    default:
      return state;
  }
}
