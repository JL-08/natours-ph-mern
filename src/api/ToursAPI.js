import API from './axiosConfig';
import { tourRoutes } from '../constants/apiRoutes';

export const getTours = (options) => API.get(tourRoutes.GET_TOURS + options);

export const getUpcomingTours = (options) =>
  API.get(tourRoutes.GET_UPCOMING_TOURS + options);

export const getNearTours = (options) =>
  API.get(tourRoutes.GET_NEAR_TOURS + options);
