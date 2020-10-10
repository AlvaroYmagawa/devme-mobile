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
    SUCCESS: '@comments/DELETE_REQUEST',
  },
};

export default types;
