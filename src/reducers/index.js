import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //renaming JIC

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer //must be form
});

export default rootReducer;
