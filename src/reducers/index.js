import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import like from './Like';

export default combineReducers({
  posts,
  post,
  like
});
