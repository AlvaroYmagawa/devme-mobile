import types from './types';

// LIST
export function listPosts() {
  return {
    type: types.LIST.REQUEST,
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
