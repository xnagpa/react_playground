import { assign } from 'lodash/object';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case 'INC_LIKE_REQUEST':
      return assign({}, state, { isFetching: true });
    case 'INC_LIKE_ERROR':
      return assign({}, state, { error: true });
    case 'INC_LIKE_SUCCESS':
      return assign({}, state, {
        entries: action.response['entries'] });
    default:
      return state;
  }
}
