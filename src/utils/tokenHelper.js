let jwt_token = '';

export const setToken = (token) => {
  jwt_token = token;
};

export const getToken = () => {
  return jwt_token;
};
