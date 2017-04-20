import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPost(id) {
  return {
    [API_CALL]:{
      endpoint: `/posts/${id}/edit`,
      method: 'PUT',
      query: {},
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
