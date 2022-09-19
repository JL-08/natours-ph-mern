import API from './axiosConfig';
import { reviewRoutes } from '../constants/apiRoutes';

export const getReviews = (queryStr) =>
  API.get(reviewRoutes.GET_REVIEWS, { params: queryStr });
