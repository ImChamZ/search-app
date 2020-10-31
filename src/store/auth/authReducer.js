import { authActions } from './actionTypes';

const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.USER_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload));
      return {
        ...state,
        ...payload,
      };
    case authActions.USER_LOGOUT_SUCCESS:
      localStorage.removeItem('user');
      return {};
  }
  return state;
};

export const getLoggedInUserData = (state) => {
  const { authReducer: { profileObj } = {} } = state;
  return profileObj;
};

export default authReducer;
