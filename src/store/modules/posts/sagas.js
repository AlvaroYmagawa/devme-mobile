import {
  takeLatest, call, put, all, delay,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

// CUSTOM IMPORTS
import api from '../../../services/api';
import types from './types';
import {
  listPostsSuccessful,
  listPostsFailed,
} from './actions';

export function* list({ payload }) {
  try {
    const { categoryId: category_id } = payload;

    yield delay(2000);

    const response = yield call(api.get, '/posts', { params: { category_id } });

    yield put(listPostsSuccessful(response.data));
  } catch (err) {
    Alert('Erro');
    yield put(listPostsFailed());
  }
}

export default all([
  takeLatest(types.LIST.REQUEST, list),
]);
