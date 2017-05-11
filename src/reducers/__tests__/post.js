import reducer from '../Post';
import * as types from 'constants/actionTypes/PostActionTypes';


describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        isUpdating: false,
        isFetching: false,
        error: false,
        entry: null
      }
    );
  });

  it('should handle FETCH_POST_REQUEST', () => {
    expect(
     reducer([], {
       type: types.FETCH_POST_REQUEST,
     })
    ).toEqual(
      {
        isUpdating: false,
        isFetching: true,
        error: false,
        entry: null
      }
    );
  });
});
