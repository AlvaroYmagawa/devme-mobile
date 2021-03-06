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

// UPDATE
export function updatePostSuccessful({ post, postId }) {
  return {
    type: types.UPDATE.SUCCESS,
    payload: { post, postId },
  };
}

// DELETE
export function deletePostSuccessful({ postId }) {
  return {
    type: types.DELETE.SUCCESS,
    payload: { postId },
  };
}
