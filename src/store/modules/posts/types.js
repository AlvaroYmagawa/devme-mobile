const types = {
  LIST: {
    REQUEST: '@posts/LIST_REQUEST',
    SUCCESS: '@posts/LIST_SUCCESS',
    FAILED: '@posts/LIST_FAILED',
  },
  CREATE: {
    SUCCESS: '@posts/CREATE_REQUEST',
  },
  UPDATE: {
    SUCCESS: '@posts/UPDATE_REQUEST',
  },
  DELETE: {
    SUCCESS: '@posts/DELETE_REQUEST',
  },
};

export default types;
