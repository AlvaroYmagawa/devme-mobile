import produce from 'immer';

// CUSTOM IMPORTS
import types from './types';
import { isDataValid } from '../../../utils/validations';

const INITIAL_STATE = {
  list: {
    data: [],
    isLoaded: false,
  },
};

export default function postsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.LIST.REQUEST: {
        draft.list.data = [];
        draft.list.isLoaded = false;
        break;
      }

      case types.LIST.SUCCESS: {
        const { posts } = action.payload;

        if (isDataValid(posts)) draft.list.data = posts;

        draft.list.isLoaded = true;

        break;
      }

      case '@auth/SIGN_OUT': {
        draft.list.data = [];
        draft.list.isLoaded = false;
        break;
      }
      default:
    }
  });
}
