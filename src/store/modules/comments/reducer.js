import produce from 'immer';

// CUSTOM IMPORTS
import apiStatus from '../../../apis/status';
import types from './types';
import { isDataValid } from '../../../utils/validations';

const INITIAL_STATE = {
  list: {
    data: [],
    isLoaded: false,
    isCreating: apiStatus.INACTIVE,
  },
};

export default function postsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      // LIST
      case types.LIST.SUCCESS: {
        const { comments } = action.payload;

        if (isDataValid(comments)) draft.list.data = comments;

        draft.list.isLoaded = true;

        break;
      }
      case types.LIST.CLEAR: {
        draft.list.data = [];
        draft.list.isLoaded = false;

        break;
      }

      // CREATE
      case types.CREATE.REQUEST: {
        draft.list.isCreating = apiStatus.PENDING;
        break;
      }
      case types.CREATE.SUCCESS: {
        const { comment } = action.payload;

        if (isDataValid(comment)) {
          draft.list.data = [...draft.list.data, comment];
        }

        draft.list.isCreating = apiStatus.SUCCESS;
        break;
      }
      case types.CREATE.FAILED: {
        draft.list.isCreating = apiStatus.FAILED;
        break;
      }

      // DELETE
      case types.DELETE.SUCCESS: {
        const { commentId } = action.payload;

        const filteredArray = draft.list.data.filter((obj) => obj.id !== commentId);

        draft.list.data = filteredArray;

        break;
      }

      case '@auth/SIGN_OUT': {
        draft.list.data = [];
        draft.list.isLoaded = false;
        draft.list.isCreating = apiStatus.INACTIVE;
        break;
      }
      default:
    }
  });
}
