/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import { addRoomSuccess, getRoomsSuccess, deleteRoomSuccess } from '../actions/room-actions';

var config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
};

export function addRoom(room) {

  console.log("room-api: addRoom ", room);

  return axios.post('http://localhost:8080/room', room, config)
    .then(response => {
      store.dispatch(addRoomSuccess(response.data));
      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

/**
 * Get all rooms
 */
export function getRooms() {
  return axios.get('http://localhost:8080/room')
    .then(response => {

      console.log('[RoomAPI] Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(getRoomsSuccess(response.data));

      console.log('[RoomAPI] After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return response;
    });
}

/**
 * Delete a movie
 */
export function deleteRoom(roomId) {
  return axios.delete('http://localhost:8080/room/' + roomId)
    .then(response => {
      store.dispatch(deleteRoomSuccess(roomId));
      return response;
    });
}