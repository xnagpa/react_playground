import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

// Я так понимаю,  тут должен быть payload
// Но в каком формате его задавать?
export function updatePost(id, payload) {
  return {
    [API_CALL]:{
      endpoint: `/posts/${id}/edit`,
      method: 'PUT',
      query: {},
      payload: payload,
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
