import {
  JOIN,
  T3_JOIN_SUCCESS,
  DB_JOIN_SUCCESS,
  DISCONNECT,
  GET_ROOM_DATA
} from '../actions/types';

const initialState = {
  tic_tac_toe: false,
  dots_boxes: false,
  is_Authenticated: false,
  name: null,
  room: null,
  icon: null,
  socket: null,
  users: [],
  oponent: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOIN:
      return {
        ...state,
        name: action.payload.name,
        room: action.payload.room,
        socket: action.payload.socket
      };
    case T3_JOIN_SUCCESS:
      return {
        ...state,
        is_Authenticated: true,
        tic_tac_toe: true
      };
    case DB_JOIN_SUCCESS:
      return {
        ...state,
        is_Authenticated: true,
        tic_tac_toe: true
      };
    case DISCONNECT:
      return {
        ...state,
        is_Authenticated: false,
        tic_tac_toe: false,
        dots_boxes: false,
        name: null,
        room: null,
        socket: null
      };
    case GET_ROOM_DATA:
      return {
        ...state,
        users: action.payload.users,
        oponent: action.payload.oponent,
        icon: action.payload.icon
      };

    default:
      return state;
  }
};
