import {
  GET_BOARD,
  ALLOW_TO_PLAY,
  DISALLOW_TO_PLAY,
  ASSIGN_NEXT_TURN,
  GOES_FIRST,
  MADE_FIRST_MOVE
} from './types';

// make move
export const make_move_ttt = (socket, data, firstMove, oponent) => dispatch => {
  // console.log(data);
  socket.emit('make move', { firstMove, data, oponent });
  if (firstMove) dispatch({ type: MADE_FIRST_MOVE });
  // data = { id, icon, user, room }
  // dispatch(display_board_ttt(socket));
};

// display board
export const display_board_ttt = socket => dispatch => {
  console.log('display board triggered');
  socket.on('display board', ({ ticTacToe_board, nextPlayer }) => {
    console.log(nextPlayer);
    dispatch({
      type: GET_BOARD,
      payload: ticTacToe_board
    });
    dispatch({
      type: ASSIGN_NEXT_TURN,
      payload: nextPlayer
    });
  });
};

export const goesFirst = () => {
  return {
    type: GOES_FIRST
  };
};

export const allowToMakeMove = () => {
  return { type: ALLOW_TO_PLAY };
};

export const disallowToMakeMove = () => {
  return { type: DISALLOW_TO_PLAY };
};

// export const allowToMakeMove = (name, nextPlayer) => {
//   if (name === nextPlayer) return { type: ALLOW_TO_PLAY };
//   else {
//     return { type: DISALLOW_TO_PLAY };
//   }
// };
