import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import like from './Like';
import comments from './Comment';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
  posts,
  post,
  comments,
  like,
  form: formReducer
});
