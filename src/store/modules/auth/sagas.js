import {
  takeLatest, put, all, delay,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

// CUSTOM IMPORTS
import firebase from 'firebase';
import { firebaseSignIn, firebaseSignUp, firebaseSignOut } from '../../../services/firebase';
import types from './types';
import {
  signInSuccess, signInFailure, signUpSuccess, signUpFailed,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield firebaseSignIn(email, password);

    console.tron.log(response.user);

    yield put(signInSuccess('adsasad', response.user));
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (err.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    alert(err);

    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    const user = {
      name: 'Kenzo Ymagawa',
      avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
    };

    const response = yield firebaseSignUp(email, password);

    yield put(signUpSuccess(user));
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (err.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    alert(err);

    yield put(signUpFailed());
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
