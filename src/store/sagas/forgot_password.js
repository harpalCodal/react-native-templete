import {FORGOT_PASSWORD_WATCHER} from '../constants';
import {forgotPasswordSuccess, forgotPasswordError} from '../actions';

import {put, takeLatest, call} from 'redux-saga/effects';
import {API_URL, BASE_URL} from 'src/axios/config';
import axios from 'src/axios';
import {Constants, isNetworkConnected, Messages, showSnackBar} from 'src/utils';

function forgotPasswordApi(forgotPasswordParams) {
  console.log('api login Request ', forgotPasswordParams);
  return axios.request({
    method: 'post',
    url: BASE_URL + API_URL.FORGOT_PASSWORD,
    data: forgotPasswordParams,
  });
}

function* forgotPasswordActionEffect(forgotPasswordAction) {
  console.log('forgotPassword Actions ', forgotPasswordAction);
  let {payload, resolve, reject} = forgotPasswordAction;
  try {
    let response = yield call(forgotPasswordApi, payload);

    console.log('forgotPassword response ', response);
    if (response.meta.status) {
      yield put(forgotPasswordSuccess(response));
    }
  } catch (e) {
    console.log('error =======> ', e);
    yield put(forgotPasswordError(e.data));
  }
}

export function* forgotPasswordActionWatcher() {
  yield takeLatest(FORGOT_PASSWORD_WATCHER, forgotPasswordActionEffect);
}
