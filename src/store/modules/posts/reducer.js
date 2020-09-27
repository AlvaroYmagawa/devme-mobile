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
      // LIST
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

      // CREATE
      case types.CREATE.SUCCESS: {
        const { post } = action.payload;

        if (isDataValid(post)) {
          const auxArray = draft.list.data;
          auxArray.unshift(post);

          draft.list.data = auxArray;
        }

        break;
      }

      // DELETE
      case types.DELETE.SUCCESS: {
        const { postId } = action.payload;

        const filteredArray = draft.list.data.filter((obj) => obj.id !== postId);

        draft.list.data = filteredArray;

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
