import {SCREEN_LOADER_FINISH, SCREEN_LOADER_START} from '../constants';

export function setScreenLoaderStart() {
  return {type: SCREEN_LOADER_START, payload: null};
}

export function setScreenLoaderFinish() {
  return {type: SCREEN_LOADER_FINISH, payload: null};
}
