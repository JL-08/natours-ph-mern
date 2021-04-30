import { GET_UPCOMING_TOURS } from '../constants/actionTypes';

const tourReducer = (state = { tourData: null }, action) => {
  switch (action.type) {
    case GET_UPCOMING_TOURS:
      return { ...state, tourData: { upcoming: action.data } };

    default:
      return state;
  }
};

export default tourReducer;
