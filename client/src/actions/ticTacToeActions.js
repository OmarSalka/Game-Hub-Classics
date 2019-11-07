import {
  GET_BOARD,
  ALLOW_TO_PLAY,
  DISALLOW_TO_PLAY,
  ASSIGN_NEXT_TURN,
  GOES_FIRST,
  MADE_FIRST_MOVE,
  PLAYER_WON,
  OPONENT_WON
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
export const display_board_ttt = (socket, currentPlayer) => dispatch => {
  socket.on('display board', ({ ticTacToe_board, nextPlayer }) => {
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

export const checkForWinner = (ttt_boardData, currentPlayer) => dispatch => {
  let win = false;
  let winner;
  let winningPiece1;
  let winningPiece2;
  let winningPiece3;

  const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = ttt_boardData;

  // horizontal
  if (b1.icon !== null && b1.icon === b2.icon && b1.icon === b3.icon) {
    win = true;
    winner = b1.user;
    winningPiece1 = b1.id;
    winningPiece2 = b2.id;
    winningPiece3 = b3.id;
  }
  if (b4.icon !== null && b4.icon === b5.icon && b4.icon === b6.icon) {
    win = true;
    winner = b4.user;
    winningPiece1 = b4.id;
    winningPiece2 = b5.id;
    winningPiece3 = b6.id;
  }
  if (b7.icon !== null && b7.icon === b8.icon && b7.icon === b9.icon) {
    win = true;
    winner = b7.user;
    winningPiece1 = b7.id;
    winningPiece2 = b8.id;
    winningPiece3 = b9.id;
  }

  // vertical
  if (b1.icon !== null && b1.icon === b4.icon && b1.icon === b7.icon) {
    win = true;
    winner = b1.user;
    winningPiece1 = b1.id;
    winningPiece2 = b4.id;
    winningPiece3 = b7.id;
  }
  if (b2.icon !== null && b2.icon === b5.icon && b2.icon === b8.icon) {
    win = true;
    winner = b2.user;
    winningPiece1 = b2.id;
    winningPiece2 = b5.id;
    winningPiece3 = b8.id;
  }
  if (b3.icon !== null && b3.icon === b6.icon && b3.icon === b9.icon) {
    win = true;
    winner = b3.user;
    winningPiece1 = b3.id;
    winningPiece2 = b6.id;
    winningPiece3 = b9.id;
  }
  // slanted
  if (b1.icon !== null && b1.icon === b5.icon && b1.icon === b9.icon) {
    win = true;
    winner = b1.user;
    winningPiece1 = b1.id;
    winningPiece2 = b5.id;
    winningPiece3 = b9.id;
  }
  if (b3.icon !== null && b3.icon === b5.icon && b3.icon === b7.icon) {
    win = true;
    winner = b3.user;
    winningPiece1 = b3.id;
    winningPiece2 = b5.id;
    winningPiece3 = b7.id;
  }
  // Win pattern found
  if (win) {
    console.log(`1: ${winningPiece1}`);
    console.log(`2: ${winningPiece2}`);
    console.log(`3: ${winningPiece3}`);
    currentPlayer === winner &&
      dispatch({
        type: PLAYER_WON,
        payload: { winningPiece1, winningPiece2, winningPiece3 }
      });
    currentPlayer !== winner &&
      dispatch({
        type: OPONENT_WON,
        payload: { winningPiece1, winningPiece2, winningPiece3 }
      });
  }
};
