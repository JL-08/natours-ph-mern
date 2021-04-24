import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (err) {
    console.log(err);
  }
};
