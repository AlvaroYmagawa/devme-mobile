import produce from 'immer';
import authTypes from '../auth/types';

const INITIAL_STATE = {
  profile: {
    data: {},
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case authTypes.signIn.SUCCESS: {
        const { user } = action.payload;

        draft.profile = user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile.data = {};
        break;
      }
      default:
    }
  });
}
