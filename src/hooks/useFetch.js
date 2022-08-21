import { useEffect, useState } from 'react';
import { statuses } from '../constants/requestStatuses';

export const useFetch = (apiFn) => {
  const [status, setStatus] = useState(statuses.IDLE);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!apiFn) return;
    const fetchData = async () => {
      setStatus(statuses.LOADING);

      try {
        const response = await apiFn();
        setData(response.data);
        setStatus(statuses.SUCCESS);
      } catch (error) {
        setStatus(statuses.FAILED);
      }
    };

    fetchData();
  }, [apiFn]);

  return { status, data };
};
