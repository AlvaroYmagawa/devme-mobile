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
