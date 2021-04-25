import { AUTH, GOOGLE_AUTH, LOGOUT } from '../constants/actionTypes';

let data;

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      data = {
        firstName: action?.data?.data?.user?.firstName,
        lastName: action?.data?.data?.user?.lastName,
        role: action?.data?.data?.user?.role,
        token: action?.data?.token,
      };

      localStorage.setItem('profile', JSON.stringify(data));
      return {
        ...state,
        authData: data,
      };

    case GOOGLE_AUTH:
      console.log(action);
      data = {
        firstName: action?.data?.result?.givenName,
        lastName: action?.data?.result?.familyName,
        role: 'user',
        token: action?.data?.token,
      };

      localStorage.setItem('profile', JSON.stringify(data));
      return {
        ...state,
        authData: data,
      };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
