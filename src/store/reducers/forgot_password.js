import {
  FORGOT_PASSWORD_WATCHER,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from '../constants';

const initialState = {
  data: null,
  error: null,
};

export default function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOT_PASSWORD_WATCHER:
      return {
        ...state,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        data: action,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action,
      };
    default:
      return state;
  }
}
