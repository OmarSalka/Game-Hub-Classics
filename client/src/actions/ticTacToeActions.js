import { GET_BOARD, DELETE_BOARD } from './types';

export const create_board = socket => dispatch => {
  socket.once('create board', ({ ttt_board }) => {
    console.log(ttt_board);
    dispatch({
      type: GET_BOARD,
      payload: ttt_board
    });
  });
  // socket.emit('create board');
  // socket.once('create board')
};

export const display_board = socket => dispatch => {
  socket.on('display board', ({ ttt_board }) => {
    dispatch({
      type: GET_BOARD,
      payload: ttt_board
    });
  });
};

export const edit_board = ({ socket, id, icon, user, room }) => dispatch => {
  socket.emit('edit ttt_board', { id, icon, user, room }, ttt_board => {});
  // socket.emit('edit ttt_board', { id, icon, user, room }, ttt_board => {
  //   dispatch({
  //     type: GET_BOARD,
  //     payload: ttt_board
  //   });
  // });
};

export const delete_board = socket => dispatch => {
  socket.on('delete board');
  dispatch({
    type: DELETE_BOARD
  });
};
