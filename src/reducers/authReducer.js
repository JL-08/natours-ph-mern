import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action);
      const { user } = action?.data?.data;
      const { token } = action?.data;

      localStorage.setItem(
        'profile',
        JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          token,
        })
      );
      return {
        ...state,
        authData: {
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          token,
        },
      };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
