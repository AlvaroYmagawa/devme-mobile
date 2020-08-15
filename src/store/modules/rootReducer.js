import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import categories from './categories/reducer';
import posts from './posts/reducer';

export default combineReducers({
  auth,
  user,
  categories,
  posts,
});
