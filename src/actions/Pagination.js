import * as types from 'constants/actionTypes/PaginationActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPage(page) {
  return {
    [API_CALL]:{
      endpoint: `/posts/pages/${page}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_PAGE_REQUEST,
        types.FETCH_PAGE_SUCCESS,
        types.FETCH_PAGE_ERROR
      ]
    }
  };
}
