import types from './types';

// SIGN UP
export function updateUser({ update }) {
  return {
    type: types.update.REQUEST,
    payload: { update },
  };
}
export function updateUserSuccessful({ update }) {
  return {
    type: types.update.SUCCESS,
    payload: { update },
  };
}
export function updateUserFailed() {
  return {
    type: types.update.FAILED,
  };
}
