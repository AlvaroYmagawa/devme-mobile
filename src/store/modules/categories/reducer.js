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

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.LIST.SUCCESS: {
        const { categories } = action.payload;

        if (isDataValid(categories)) draft.list.data = categories;

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
