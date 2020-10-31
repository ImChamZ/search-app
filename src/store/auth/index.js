import { authActions } from './actionTypes';

const userLoggedIn = (user) => ({
  type: authActions.USER_LOGIN_SUCCESS,
  payload: user,
});

const userLogout = () => ({
  type: authActions.USER_LOGOUT_SUCCESS,
  payload: {},
});

export { userLoggedIn, userLogout };
