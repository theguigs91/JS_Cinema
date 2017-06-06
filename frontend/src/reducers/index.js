import { combineReducers } from 'redux';

// Reducers
//import searchLayoutReducer from './search-layout-reducer';

import userReducer from './user-reducer';
import movieReducer from './movie-reducer';
import scheduleReducer from './schedule-reducer';
import reservationReducer from './reservation-reducer';
import roomReducer from './room-reducer';

// Combine Reducers
let reducers = combineReducers({
   userReducer,
   movieReducer,
   roomReducer
  //scheduleState: scheduleReducer,
  //reservationState: reservationReducer,
});

export default reducers;
