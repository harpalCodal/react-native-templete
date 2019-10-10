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

const initialState = {
  data: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_WATCHER:
    case SIGNUP_WATCHER:
    case LOG_OUT_WATCHER:
      return {
        ...state,
      };
    case AUTH_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        data: action,
      };
    case AUTH_FAILURE:
    case SIGNUP_FAILURE:
    case LOG_OUT_FAILURE:
      return {
        ...state,
        error: action,
      };
    default:
      return state;
  }
}
