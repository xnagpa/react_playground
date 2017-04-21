import * as types from 'constants/actionTypes/CommentActionTypes';
import { API_CALL } from 'middleware/API';

export default function createComment(postId, payload) {
  return {
    [API_CALL]:{
      endpoint: `/posts/${postId}/comments`,
      method: 'POST',
      query: {},
      payload: payload,
      types: [
        types.CREATE_COMMENT_REQUEST,
        types.CREATE_COMMENT_SUCCESS,
        types.CREATE_COMMENT_ERROR
      ]
    }
  };
}
