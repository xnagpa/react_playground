import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import pagination from './Pagination';

export default combineReducers({
  posts,
  post,
  pagination
});
