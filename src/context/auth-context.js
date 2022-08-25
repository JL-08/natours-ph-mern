import { createContext, useEffect, useState } from 'react';
import { getNewToken } from '../api/AuthAPI';
import ProgressCircle from '../components/ProgressBar/ProgressCircle';
import { statuses } from '../constants/requestStatuses';
import { useFetch } from '../hooks/useFetch';
import { setToken } from '../utils/tokenHelper';

export const authContext = createContext({
  user: {},
  setUser: () => {},
});

export function ProviderAuth({ children }) {
  const [user, setUser] = useState({});
  const { status, data } = useFetch(getNewToken);

  useEffect(() => {
    if (data?.data?.token) {
      setToken(data?.data?.token);
      setUser(data?.data?.user);
    }
  }, [user, data]);

  const auth = {
    user,
    setUser,
  };

  return (
    <>
      {status === statuses.LOADING ? (
        <ProgressCircle />
      ) : (
        <authContext.Provider value={auth}>{children}</authContext.Provider>
      )}
    </>
  );
}
