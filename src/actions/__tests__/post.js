import { fetchPost } from '../Post';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

describe('Post action creator', () => {
  it('should create an action to fetch post', () => {
    const expectedAction = {
      [API_CALL]:{
        endpoint: '/posts/1',
        method: 'GET',
        query: {},
        types: [
          types.FETCH_POST_REQUEST,
          types.FETCH_POST_SUCCESS,
          types.FETCH_POST_ERROR
        ]
      }
    };
    expect(fetchPost(1)).toEqual(expectedAction);
  });
});
