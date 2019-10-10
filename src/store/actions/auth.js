import {
  AUTH_WATCHER,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGNUP_WATCHER,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOG_OUT_WATCHER,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from '../constants';

export function authWatcher(session, resolve, reject) {
  return {type: AUTH_WATCHER, payload: session, resolve, reject};
}

export function authSuccess(data) {
  return {type: AUTH_SUCCESS, payload: data};
}

export function authError(error) {
  return {type: AUTH_FAILURE, payload: error};
}

export function signupWatcher(session, resolve, reject) {
  return {type: SIGNUP_WATCHER, payload: session, resolve, reject};
}

export function signupSuccess(data) {
  return {type: SIGNUP_SUCCESS, payload: data};
}

export function signupError(error) {
  return {type: SIGNUP_FAILURE, payload: error};
}

export function logoutWatcher(session, resolve, reject) {
  return {type: LOG_OUT_WATCHER, payload: session, resolve, reject};
}

export function logoutSuccess(data) {
  return {type: LOG_OUT_SUCCESS, payload: data};
}

export function logoutError(error) {
  return {type: LOG_OUT_FAILURE, payload: error};
}
