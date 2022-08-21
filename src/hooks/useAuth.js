import { useContext, useState } from 'react';
import { getNewToken } from '../api/AuthAPI';
import { statuses } from '../constants/requestStatuses';
import { authContext } from '../context/auth-context';
import { setToken } from '../utils/tokenHelper';

export const useAuth = () => {
  const authCtx = useContext(authContext);
  const [status, setStatus] = useState(statuses.IDLE);
  const [errors, setErrors] = useState([]);

  const callAuthAPI = async (apiFn, params, history) => {
    setStatus(statuses.LOADING);

    try {
      const response = await apiFn(params);
      authCtx.setUser(response.data.data.user);
      console.log('resp', response.data.data.user);

      setStatus(statuses.SUCCESS);
      setToken(response.data.data.token);
      history.push('/');
    } catch (error) {
      setStatus(statuses.FAILED);
    }
  };

  const generateNewToken = async (userData) => {
    setStatus(statuses.LOADING);
    try {
      const response = await getNewToken(userData);
      //authCtx.setUser(data);
      console.log('token: ', response.data);
      setStatus(statuses.SUCCESS);
    } catch (error) {
      console.log('token: ', error);
      setErrors(error.errors);
      setStatus(statuses.FAILED);
    }
  };

  return {
    status,
    errors,
    callAuthAPI,
    generateNewToken,
  };
};
