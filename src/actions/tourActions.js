import { GET_UPCOMING_TOURS } from '../constants/actionTypes';
import * as api from '../api/index';

export const getUpcomingTours = () => async (dispatch) => {
  try {
    const { data } = await api.getUpcomingTours();

    dispatch({ type: GET_UPCOMING_TOURS, data });
  } catch (err) {
    console.log(err);
  }
};
