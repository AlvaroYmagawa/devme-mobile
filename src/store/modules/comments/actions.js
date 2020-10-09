import types from './types';

// LIST
export function listComments({ postId }) {
  return {
    type: types.LIST.REQUEST,
    payload: { postId },
  };
}
export function listCommentsSuccessful({ comments }) {
  return {
    type: types.LIST.SUCCESS,
    payload: { comments },
  };
}
export function listCommentsFailed() {
  return {
    type: types.LIST.FAILED,
  };
}
export function clearComments() {
  return {
    type: types.LIST.CLEAR,
  };
}

// CRAETE
export function craeteCommentSuccessful({ comment }) {
  return {
    type: types.CREATE.SUCCESS,
    payload: { comment },
  };
}

// DELETE
export function deletePostSuccessful({ commentId }) {
  return {
    type: types.DELETE.SUCCESS,
    payload: { commentId },
  };
}
