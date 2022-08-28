import { useState } from 'react';
import { statuses } from '../constants/requestStatuses';

export const useApi = () => {
  const [status, setStatus] = useState(statuses.IDLE);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState([]);

  // Method used to call POST, PUT and DELETE requests
  const sendRequest = async (apiFn, params, history) => {
    setStatus(statuses.LOADING);

    try {
      const response = await apiFn(params);
      setData(response.data.data);
      console.log('resp', response.data.data);

      setStatus(statuses.SUCCESS);
      history.push('/');
    } catch (error) {
      setStatus(statuses.FAILED);
      setErrors((currentErrors) => [...currentErrors, error.message]);
    }
  };

  // Method used to call GET requests
  const fetchRequest = async (apiFn, options = '', history) => {
    setStatus(statuses.LOADING);

    try {
      const response = await apiFn(options);
      setData(response.data.data);
      console.log('resp', response.data.data);

      setStatus(statuses.SUCCESS);
      history.push('/');
    } catch (error) {
      setStatus(statuses.FAILED);
      setErrors((currentErrors) => [...currentErrors, error.message]);
    }
  };

  return {
    data,
    status,
    errors,
    sendRequest,
    fetchRequest,
  };
};
