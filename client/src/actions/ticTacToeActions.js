import { GET_BOARD } from './types';

// make move
export const make_move_ttt = (socket, data) => dispatch => {
  socket.emit('make move', data);
  // data = { id, icon, user, room }
};

// display board
export const display_board_ttt = (socket, room) => dispatch => {
  socket.on('display board', updatedBoard => {
    dispatch({
      type: GET_BOARD,
      payload: updatedBoard
    });
  });
};
