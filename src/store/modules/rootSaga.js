import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import categories from './categories/sagas';
import posts from './posts/sagas';
import comments from './comments/sagas';

export default function* rootSaga() {
  return yield all([auth, user, categories, posts, comments]);
}
