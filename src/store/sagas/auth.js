import AsyncStorage from '@react-native-community/async-storage';

import {AUTH_WATCHER, SIGNUP_WATCHER, LOG_OUT_WATCHER} from '../constants';
import {
  authSuccess,
  authError,
  signupSuccess,
  signupError,
  logoutSuccess,
  logoutError,
  setScreenLoaderStart,
  setScreenLoaderFinish,
} from '../actions';

import {put, takeLatest, call} from 'redux-saga/effects';
import {API_URL, BASE_URL} from 'src/axios/config';
import axios from 'src/axios';
import {Constants, isNetworkConnected, Messages, showSnackBar} from 'src/utils';

function loginApi(authParams) {
  console.log('api login Request ', authParams);
  return axios.request({
    method: 'post',
    url: BASE_URL + API_URL.LOGIN,
    data: authParams,
  });
}

function signupApi(authParams) {
  console.log('api signup Request ', authParams);
  return axios.request({
    method: 'post',
    url: BASE_URL + API_URL.SIGNUP,
    data: authParams,
  });
}

async function logoutApi(authParams) {
  let token = await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
  console.log('Logout  Request ', authParams);
  return axios.request({
    method: 'post',
    url: BASE_URL + API_URL.LOGOUT,
    data: authParams,
  });
}

function* authActionEffect(loginAction) {
  console.log('Login Actions ', loginAction);
  let {payload, resolve, reject} = loginAction;
  try {
    yield put(setScreenLoaderStart());
    let response = yield call(loginApi, payload);

    console.log('auth  response ', response);
    yield put(setScreenLoaderFinish());
    if (response.meta.status) {
      yield AsyncStorage.setItem(
        Constants.StorageKey.TOKEN,
        response.data.user.access_token,
      );
      yield put(authSuccess(response.data));
    }
  } catch (e) {
    console.log('error =======> ', e);
    yield put(setScreenLoaderFinish());
    yield put(authError(e.data));
  }
}

function* signupActionEffect(signupAction) {
  console.log('signup Actions ', signupAction);
  let {payload} = signupAction;
  try {
    yield put(setScreenLoaderStart());
    let response = yield call(signupApi, payload);
    console.log('signup  response ', response);
    yield put(setScreenLoaderFinish());
    if (response.meta.status) {
      yield AsyncStorage.setItem(
        Constants.StorageKey.TOKEN,
        response.data.user.access_token,
      );
      yield put(authSuccess(response.data));
    } else {
      console.log('error ', response);
      yield put(authError(response));
    }
  } catch (e) {
    console.log('error =======> ', e);
    yield put(setScreenLoaderFinish());
    yield put(authError(e.data));
  }
}

function* logoutActionEffect(actions) {
  console.log('logoutActionEffect ', actions);
  let {payload, resolve, reject} = actions;
  try {
    const isInternet = yield isNetworkConnected();

    yield put(setScreenLoaderStart());
    let response = yield call(logoutApi, payload);

    console.log('logoutActionEffect  response ', response);
    yield put(setScreenLoaderFinish());
    if (response.meta.status) {
      yield AsyncStorage.clear();
      yield put(logoutSuccess(response.data));
    } else {
      console.log('reject', reject);
      yield put(logoutError(response));
    }
  } catch (e) {
    console.log('error =======> ', e);
    yield put(setScreenLoaderFinish());
    yield put(logoutError(e.data));
  }
}

export function* authActionWatcher() {
  yield takeLatest(AUTH_WATCHER, authActionEffect);
}

export function* signupActionWatcher() {
  yield takeLatest(SIGNUP_WATCHER, signupActionEffect);
}

export function* logoutActionWatcher() {
  yield takeLatest(LOG_OUT_WATCHER, logoutActionEffect);
}
