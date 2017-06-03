import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import movieReducer from './movie-reducer';
import scheduleReducer from './schedule-reducer';
import reservationReducer from './reservation-reducer';
import roomReducer from './room-reducer';

// Combine Reducers
var reducers = combineReducers({
  userState: userReducer,
  movieState: movieReducer,
  scheduleState: scheduleReducer,
  reservationState: reservationReducer,
  roomState: roomReducer
});

export default reducers;