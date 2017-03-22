import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PAGE_REQUEST':
      return assign({},initialState, { isFetching: true });
    case 'FETCH_PAGE_ERROR':
      return assign({},initialState, { error: true });
    case 'FETCH_PAGE_SUCCESS':
      return assign({},initialState, { entries: action.response });
    default:
      return state;
  }
}
