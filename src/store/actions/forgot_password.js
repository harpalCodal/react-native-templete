import {
  FORGOT_PASSWORD_WATCHER,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from '../constants';

export function forgotPasswordWatcher(session, resolve, reject) {
  return {type: FORGOT_PASSWORD_WATCHER, payload: session, resolve, reject};
}

export function forgotPasswordSuccess(data) {
  return {type: FORGOT_PASSWORD_SUCCESS, payload: data};
}

export function forgotPasswordError(error) {
  return {type: FORGOT_PASSWORD_FAILURE, payload: error};
}
