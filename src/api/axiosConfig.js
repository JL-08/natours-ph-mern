import axios from 'axios';
import { getToken } from '../utils/tokenHelper';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  const token = getToken();

  if (token.length > 0) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
