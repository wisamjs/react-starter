import { call, all, put, takeLatest } from 'redux-saga/effects';

import {
  ON_APP_MOUNT,
  ON_APP_MOUNT_SUCCESS,
  ON_APP_MOUNT_ERROR,
} from '../../actions/consts';

import { getData } from '../../api/data';

export function* fetchAppData(action) {
  try {

    const [data] = yield all([
      call(getData), 
    ]);

    yield put({ type: ON_APP_MOUNT_SUCCESS, payload: {data} });
  } catch (e) {
    yield put({ type: ON_APP_MOUNT_ERROR, message: e.message });
  }
}

export function* apiSaga() {
  yield takeLatest(ON_APP_MOUNT, fetchAppData);
}
