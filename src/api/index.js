import axios from 'axios';
import { authRoutes, tourRoutes } from '../constants/apiRoutes';

const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const register = (formData) => API.post(authRoutes.REGISTER, formData);
export const login = (formData) => API.post(authRoutes.LOGIN, formData);

export const getUpcomingTours = () => API.get(tourRoutes.GET_UPCOMING_TOURS);
