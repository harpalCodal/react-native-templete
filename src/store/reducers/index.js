import {combineReducers} from 'redux';
import authReducer from './auth';
import forgotPasswordReducer from './forgot_password';

const rootReducer = combineReducers({
  authReducer,
  forgotPasswordReducer,
});

export default rootReducer;
