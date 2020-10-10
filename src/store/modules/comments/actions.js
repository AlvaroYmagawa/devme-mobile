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
export function craeteComment({ commentData }) {
  return {
    type: types.CREATE.REQUEST,
    payload: { commentData },
  };
}
export function craeteCommentSuccessful({ comment }) {
  return {
    type: types.CREATE.SUCCESS,
    payload: { comment },
  };
}
export function craeteCommentFailed() {
  return {
    type: types.CREATE.FAILED,
  };
}

// DELETE
export function deleteComment({ commentId }) {
  return {
    type: types.DELETE.REQUEST,
    payload: { commentId },
  };
}
export function deleteCommentSuccessful({ commentId }) {
  return {
    type: types.DELETE.SUCCESS,
    payload: { commentId },
  };
}

export function deleteCommentFailed() {
  return {
    type: types.DELETE.FAILED,
  };
}
