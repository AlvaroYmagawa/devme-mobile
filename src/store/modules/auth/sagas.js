/* eslint-disable import/no-cycle */
import {
  takeLatest, put, all,
} from 'redux-saga/effects';

// CUSTOM IMPORTS
import { showErrors } from '../../../utils/apiUtils';
import { firebaseSignIn, firebaseSignUp, firebaseSignOut } from '../../../services/firebase';
import types from './types';
import {
  signInSuccess, signInFailure, signUpSuccess, signUpFailed,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield firebaseSignIn(email, password);

    yield put(signInSuccess(null, response.user));
  } catch (err) {
    yield put(signInFailure());
    showErrors(err);
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield firebaseSignUp(email, password);

    yield put(signUpSuccess(user));
  } catch (err) {
    yield put(signUpFailed());
    showErrors(err);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
}

export function* signOut() {
  yield firebaseSignOut();

  yield put(signOut());
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.signIn.REQUEST, signIn),
  takeLatest(types.signUp.REQUEST, signUp),
]);
