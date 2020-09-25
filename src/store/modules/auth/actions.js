import types from './types';

// SIGN IN
export function signIn(email, password) {
  return {
    type: types.signIn.REQUEST,
    payload: { email, password },
  };
}
export function signInSuccess(token, user) {
  return {
    type: types.signIn.SUCCESS,
    payload: { token, user },
  };
}
export function signInFailure() {
  return {
    type: types.signIn.FAILED,
  };
}

// SIGN UP
export function signUp({ email, password }) {
  return {
    type: types.signUp.REQUEST,
    payload: { email, password },
  };
}
export function signUpSuccess(user) {
  return {
    type: types.signUp.SUCCESS,
    payload: { user },
  };
}
export function signUpFailed() {
  return {
    type: types.signUp.FAILED,
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
