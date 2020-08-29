import {
  takeLatest, call, put, all, delay,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

// CUSTOM IMPORTS
import types from './types';
import {
  signInSuccess, signInFailure, signUpSuccess, signUpFailed,
} from './actions';

export function* signIn({ payload }) {
  try {
    const user = {
      name: 'Kenzo Ymagawa',
      avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
      bio: 'Frontend development in YAZO, Software Eng student in UTFPR-CP',
      phone: '(43)988209509',
      role: 'Frontend DEV',
      knowledges: [
        { id: 1, name: 'React Native', type: 'reactNative' },
        { id: 2, name: 'React.js', type: 'reactJs' },
        { id: 5, name: 'CSS', type: 'css' },
      ],
    };

    const token = 'utfpr';

    yield delay(2000);

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const user = {
      name: 'Kenzo Ymagawa',
      avatar: 'https://scontent.fldb3-1.fna.fbcdn.net/v/t1.0-9/80002404_2606722342777801_5492740259315712000_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeFbxP5SJpvLoUhH7r4uz-36MyqFh_iPEN8zKoWH-I8Q3_YwE5WmaSOgpfrq44M4vwylJa4ydN2OPSfbodCB7Dir&_nc_ohc=01qwzIxu7gQAX9_MKuM&_nc_ht=scontent.fldb3-1.fna&oh=833a7089ab59f8015e5a15f8b25730cc&oe=5F59F553',
    };

    yield delay(2000);

    yield put(signUpSuccess(user));

    Alert.alert(
      'Login',
      'Cadastrado',
    );
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signUpFailed());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  // if (token) {
  //   api.defaults.headers.Authorization = `Bearer ${token}`; //
  // }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.signIn.REQUEST, signIn),
  takeLatest(types.signUp.REQUEST, signUp),
]);
