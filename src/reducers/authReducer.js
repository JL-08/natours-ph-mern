import { AUTH } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action);
      const { user } = action?.data?.data;
      localStorage.setItem(
        'profile',
        JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        })
      );
      return {
        ...state,
        authData: {
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
