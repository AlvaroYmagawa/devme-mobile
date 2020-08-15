import types from './types';

// LIST
export function listCategories() {
  return {
    type: types.LIST.REQUEST,
  };
}
export function listCategoriesSuccessful(categories) {
  return {
    type: types.LIST.SUCCESS,
    payload: { categories },
  };
}
export function listCategoriesFailed() {
  return {
    type: types.LIST.FAILED,
  };
}
