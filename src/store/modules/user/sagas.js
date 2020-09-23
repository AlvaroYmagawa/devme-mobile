// /* eslint-disable import/no-cycle */
// import {
//   takeLatest, put, all,
// } from 'redux-saga/effects';

// // CUSTOM IMPORTS
// import { showErrors } from '../../../utils/apiUtils';
// import types from './types';
// import {
//   updateUserFailed, updateUserSuccessful,
// } from './actions';

// export function* update({ payload }) {
//   try {
//     const { update } = payload;

//     yield put(updateUserSuccessful());
//   } catch (err) {
//     yield put(updateUserFailed());
//     showErrors(err);
//   }
// }

// export default all([
//   takeLatest(types.update.REQUEST, update),
// ]);
