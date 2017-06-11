import { combineReducers } from 'redux';

// Reducers
//import searchLayoutReducer from './search-layout-reducer';

import userReducer from './user-reducer';
import movieReducer from './movie-reducer';
import scheduleReducer from './schedule-reducer';
import reservationReducer from './reservation-reducer';
import roomReducer from './room-reducer';
import pageReducer from './page-reducer';

// Combine Reducers
let reducers = combineReducers({
  userState: userReducer,
  movieState: movieReducer,
  roomState: roomReducer,
  scheduleState: scheduleReducer,
  reservationState: reservationReducer,
  pageState: pageReducer
});

export default reducers;
