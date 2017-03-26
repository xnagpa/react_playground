import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case 'INC_LIKE_REQUEST':
      return assign({},initialState, { isFetching: true });
    case 'INC_LIKE_ERROR':
      return assign({},initialState, { error: true });
    case 'INC_LIKE_SUCCESS':
      return assign({},initialState, { entries: action.response });
    default:
      return state;
  }
}
