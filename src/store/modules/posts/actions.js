import types from './types';

// LIST
export function listPosts(categoryId) {
  return {
    type: types.LIST.REQUEST,
    payload: { categoryId },
  };
}
export function listPostsSuccessful(posts) {
  return {
    type: types.LIST.SUCCESS,
    payload: { posts },
  };
}
export function listPostsFailed() {
  return {
    type: types.LIST.FAILED,
  };
}

// CRAETE
export function craetePostSuccessful({ post }) {
  return {
    type: types.CREATE.SUCCESS,
    payload: { post },
  };
}

// DELETE
export function deletePostSuccessful({ postId }) {
  return {
    type: types.DELETE.SUCCESS,
    payload: { postId },
  };
}
