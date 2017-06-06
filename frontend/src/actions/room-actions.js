import * as types from './action-types';

export function getRoomSuccess(room) {
  console.log("room-actions.addRoom: ", room);
  return {
    type: types.ADD_ROOM_SUCCESS,
    numero: room.numero,
    places_max: room.places_max,
  }
}

export function deleteRoomSuccess(id) {
  return {
    type: types.DELETE_ROOM_SUCCESS,
    id: id
  }
}

export function getRoomsSuccess(rooms) {
  return {
    type: types.GET_ROOMS_SUCCESS,
    rooms
  }
}