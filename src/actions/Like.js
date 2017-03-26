import * as types from 'constants/actionTypes/LikeActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPage(page) {
  return {
    [API_CALL]:{
      endpoint: `/posts/pages/${page}/likes`,
      method: 'PUT',
      query: {},
      types: [
        types.INC_LIKE_REQUEST,
        types.INC_LIKE_SUCCESS,
        types.INC_LIKE_ERROR
      ]
    }
  };
}
