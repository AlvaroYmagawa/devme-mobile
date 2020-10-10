const types = {
  LIST: {
    REQUEST: '@comments/LIST_REQUEST',
    SUCCESS: '@comments/LIST_SUCCESS',
    FAILED: '@comments/LIST_FAILED',
    CLEAR: '@comments/LIST_CLEAR',
  },
  CREATE: {
    REQUEST: '@comments/CREATE_REQUEST',
    SUCCESS: '@comments/CREATE_SUCCESS',
    FAILED: '@comments/CREATE_FAILED',
  },
  DELETE: {
    REQUEST: '@comments/DELETE_REQUEST',
    SUCCESS: '@comments/DELETE_SUCCESS',
    FAILED: '@comments/DELETE_FAILED',
  },
};

export default types;
