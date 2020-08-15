import {
  takeLatest, call, put, all, delay,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

// CUSTOM IMPORTS
import types from './types';
import {
  listCategoriesSuccessful,
  listCategoriesFailed,
} from './actions';

export function* list() {
  try {
    const categories = [
      { id: 1, name: 'React Native', type: 'reactNative' },
      { id: 2, name: 'React.js', type: 'reactJs' },
      { id: 3, name: 'Vue.js', type: 'vueJs' },
      { id: 4, name: 'Javascript', type: 'javascript' },
      { id: 5, name: 'CSS', type: 'css' },
      { id: 6, name: 'Git', type: 'git' },
    ];

    yield delay(2000);

    yield put(listCategoriesSuccessful(categories));
  } catch (err) {
    Alert('Erro');
    yield put(listCategoriesFailed());
  }
}

export default all([
  takeLatest(types.LIST.REQUEST, list),
]);
