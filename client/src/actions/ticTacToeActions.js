import { GET_BOARD } from './types';

// make move
export const make_move_ttt = (socket, data) => dispatch => {
  // console.log(data);
  socket.emit('make move', data);
  // data = { id, icon, user, room }
  dispatch(display_board_ttt(socket));
};

// display board
export const display_board_ttt = socket => dispatch => {
  console.log('display board triggered');
  socket.on('display board', ticTacToe_board => {
    console.log(ticTacToe_board.ticTacToe_board[0]);
    dispatch({
      type: GET_BOARD,
      payload: ticTacToe_board.ticTacToe_board
    });
  });
};
