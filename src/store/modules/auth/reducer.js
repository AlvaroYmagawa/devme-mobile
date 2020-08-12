import produce from 'immer';

// CUSTOM IMPORTS
import types from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  signing: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.signIn.REQUEST:
      case types.signUp.REQUEST:
      {
        draft.signing = true;
        break;
      }
      case types.signIn.SUCCESS: {
        const { token } = action.payload;
        draft.token = token;
        draft.signed = true;
        draft.signing = false;
        break;
      }
      case types.signUp.SUCCESS: {
        draft.signing = false;
        break;
      }
      case types.signIn.FAILED:
      case types.signUp.FAILED:
      {
        draft.signing = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.signing = false;
        break;
      }
      default:
    }
  });
}
