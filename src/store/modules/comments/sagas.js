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
  craeteCommentSuccessful,
  craeteCommentFailed,
  deleteCommentSuccessful,
  deleteCommentFailed,
} from './actions';

export function* list({ payload }) {
  try {
    const { postId } = payload;

    yield delay(2000);

    const response = yield call(api.get, '/comments', { params: { post_id: postId } });

    yield put(listCommentsSuccessful({ comments: response.data }));
  } catch (err) {
    yield put(listCommentsFailed());
  }
}

export function* craete({ payload }) {
  try {
    const { commentData } = payload;

    yield delay(2000);

    const response = yield call(api.post, '/comments', commentData);

    yield put(craeteCommentSuccessful({ comment: response.data }));
  } catch (err) {
    yield put(craeteCommentFailed());
  }
}

export function* destroy({ payload }) {
  try {
    const { commentId } = payload;

    yield delay(2000);

    yield call(api.delete, `/comments/${commentId}`);

    yield put(deleteCommentSuccessful({ commentId }));
  } catch (err) {
    yield put(deleteCommentFailed());
  }
}

export default all([
  takeLatest(types.LIST.REQUEST, list),
  takeLatest(types.CREATE.REQUEST, craete),
  takeLatest(types.DELETE.REQUEST, destroy),
]);
