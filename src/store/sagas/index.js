import {all} from 'redux-saga/effects';
import {
  authActionWatcher,
  signupActionWatcher,
  logoutActionWatcher,
} from './auth';

import {forgotPasswordActionWatcher} from './forgot_password';

export default function* rootSaga() {
  yield all([
    authActionWatcher(),
    signupActionWatcher(),
    logoutActionWatcher(),
    forgotPasswordActionWatcher(),
  ]);
}
