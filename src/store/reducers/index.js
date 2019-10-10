import {combineReducers} from 'redux';
import authReducer from './auth';
import screenLoaderReducer from './screen_loader';
import forgotPasswordReducer from './forgot_password';

const rootReducer = combineReducers({
  authReducer,
  screenLoaderReducer,
  forgotPasswordReducer,
});

export default rootReducer;
