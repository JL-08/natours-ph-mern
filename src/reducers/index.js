import { combineReducers } from 'redux';

import auth from './authReducer';
import tour from './tourReducer';

export default combineReducers({
  auth,
  tour,
});
