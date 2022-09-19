import API from './axiosConfig';
import { tourRoutes } from '../constants/apiRoutes';

export const getTours = (queryStr) =>
  API.get(tourRoutes.GET_TOURS, { params: queryStr });

export const getTour = (queryStr, params) =>
  API.get(`${tourRoutes.GET_TOURS}/${params.id}`, { params: queryStr });

export const getUpcomingTours = (queryStr) =>
  API.get(tourRoutes.GET_UPCOMING_TOURS, { params: queryStr });

export const getNearTours = (queryStr, params) =>
  API.get(
    `${tourRoutes.GET_NEAR_TOURS}/${params.latitude}, ${params.longitude}/unit/km`,
    { params: queryStr }
  );
