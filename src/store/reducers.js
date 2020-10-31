import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

// import all reducers here

export default combineReducers({
  authReducer,
});
