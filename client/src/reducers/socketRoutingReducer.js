import { JOIN, CONNECTION_SUCCESS_TTT } from '../actions/types';

const initialState = {
  is_Authenticated: false,
  tic_tac_toe: false,
  dots_boxes: false,
  is_Authenticated: false,
  name: null,
  room: null,
  socket: null
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
    case CONNECTION_SUCCESS_TTT:
      return {
        ...state,
        is_Authenticated_ttt: true,
        tic_tact_toe: true
      };
    default:
      return state;
  }
};
