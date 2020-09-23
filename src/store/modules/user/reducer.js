import produce from 'immer';
import authTypes from '../auth/types';
import types from './types';

const INITIAL_STATE = {
  profile: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case authTypes.signIn.SUCCESS: {
        const { user } = action.payload;

        draft.profile = user;
        break;
      }

      case types.update.SUCCESS: {
        const { update } = action.payload;

        draft.profile = { ...draft.profile, ...update };

        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = {};
        break;
      }
      default:
    }
  });
}
