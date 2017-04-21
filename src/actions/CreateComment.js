import * as types from 'constants/actionTypes/CommentActionTypes';
import { API_CALL } from 'middleware/API';

export default function createComment(postId) {
  return {
    [API_CALL]:{
      endpoint: `/posts/${postId}/comments`,
      method: 'POST',
      query: {},
      types: [
        types.CREATE_COMMENT_REQUEST,
        types.CREATE_COMMENT_SUCCESS,
        types.CREATE_COMMENT_ERROR
      ]
    }
  };
}
