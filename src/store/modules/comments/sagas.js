import {
  takeLatest, call, put, all, delay,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

// CUSTOM IMPORTS
import api from '../../../services/api';
import types from './types';
import {
  listCommentsSuccessful,
  listCommentsFailed,
} from './actions';

export function* list({ payload }) {
  try {
    const { postId } = payload;

    yield delay(2000);

    const response = yield call(api.get, '/comments', { params: { post_id: postId } });

    yield put(listCommentsSuccessful({ comments: response.data }));
  } catch (err) {
    Alert('Erro');
    yield put(listCommentsFailed());
  }
}

export default all([
  takeLatest(types.LIST.REQUEST, list),
]);
