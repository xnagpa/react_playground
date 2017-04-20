import { combineReducers } from 'redux';
import post from './Post';
import posts from './Posts';
import like from './Like';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
  posts,
  post,
  like,
  form: formReducer 
});
