import { createContext, useEffect, useState } from 'react';
import { getNewToken } from '../api/AuthAPI';
import { useFetch } from '../hooks/useFetch';
import { setToken } from '../utils/tokenHelper';

export const authContext = createContext({
  user: {},
  setUser: () => {},
});

export function ProviderAuth({ children }) {
  const [user, setUser] = useState({});
  const { data } = useFetch(getNewToken);

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

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
