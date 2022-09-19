import { useEffect, useState } from 'react';
import { statuses } from '../constants/requestStatuses';

export const useFetch = (apiFn, queryStr = {}, params = {}) => {
  const [status, setStatus] = useState(statuses.IDLE);
  const [data, setData] = useState([]);

  useEffect(() => {
    let isRendered = true;
    if (!apiFn) return;

    const fetchData = async () => {
      setStatus(statuses.LOADING);

      try {
        const response = await apiFn(queryStr, params);

        if (isRendered) {
          setData(response.data);
          setStatus(statuses.SUCCESS);
        }
      } catch (error) {
        setStatus(statuses.FAILED);
      }
    };

    fetchData();

    return () => {
      isRendered = false;
    };
  }, [apiFn]);

  return { data, status };
};
