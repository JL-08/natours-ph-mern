import API from './axiosConfig';
import { tourRoutes } from '../constants/apiRoutes';

export const getUpcomingTours = () => API.get(tourRoutes.GET_UPCOMING_TOURS);
