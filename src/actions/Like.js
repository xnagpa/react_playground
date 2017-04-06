import * as types from 'constants/actionTypes/LikeActionTypes';
import { API_CALL } from 'middleware/API';

export default function like(postId) {
  return {
    [API_CALL]:{
      endpoint: `/posts/${postId}/likes`,
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
