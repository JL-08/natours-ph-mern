import API from './axiosConfig';
import { authRoutes } from '../constants/apiRoutes';

export const register = (formData) => API.post(authRoutes.REGISTER, formData);
export const login = (formData) => API.post(authRoutes.LOGIN, formData);
export const getNewToken = () => API.get(authRoutes.TOKEN);
