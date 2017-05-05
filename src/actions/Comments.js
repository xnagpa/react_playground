import * as types from 'constants/actionTypes/CommentActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchComments(postId) {
  return {
    [API_CALL]:{
      endpoint: `/posts/${postId}/comments`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_COMMENTS_REQUEST,
        types.FETCH_COMMENTS_SUCCESS,
        types.FETCH_COMMENTS_ERROR
      ]
    }
  };
}
