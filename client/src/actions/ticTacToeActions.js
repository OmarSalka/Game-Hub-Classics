import {
  GET_BOARD,
  ALLOW_TO_PLAY,
  DISALLOW_TO_PLAY,
  ASSIGN_NEXT_TURN,
  GOES_FIRST,
  MADE_FIRST_MOVE,
  PLAYER_WON,
  OPONENT_WON,
  REMATCH,
  ONE_PLAYER_LEFT,
  DELETE_BOARD,
  DRAW
} from './types';

// make move
export const make_move_ttt = (socket, data, firstMove, oponent) => dispatch => {
  socket.emit('make move', { firstMove, data, oponent });
  if (firstMove) dispatch({ type: MADE_FIRST_MOVE });
};

// display board
export const display_board_ttt = socket => dispatch => {
  socket.on('display board', ({ ticTacToe_board, nextPlayer }) => {
    dispatch({
      type: GET_BOARD,
      payload: ticTacToe_board
    });
    nextPlayer &&
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

export const checkForWinner = (
  ttt_boardData,
  currentPlayer,
  users
) => dispatch => {
  let win = false;
  let winner;
  let winningPiece1;
  let winningPiece2;
  let winningPiece3;
  let draw = false;

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

  //  draw
  if (
    b1.icon !== null &&
    b2.icon !== null &&
    b3.icon !== null &&
    b4.icon !== null &&
    b5.icon !== null &&
    b6.icon !== null &&
    b7.icon !== null &&
    b8.icon !== null &&
    b9.icon !== null &&
    !win
  ) {
    draw = true;
  }

  // Win pattern found
  if (win) {
    if (currentPlayer === winner) {
      dispatch({
        type: PLAYER_WON,
        payload: { winningPiece1, winningPiece2, winningPiece3, winner }
      });
      dispatch({
        type: GOES_FIRST
      });
    }
    currentPlayer !== winner &&
      dispatch({
        type: OPONENT_WON,
        payload: { winningPiece1, winningPiece2, winningPiece3, winner }
      });
  }
  // It's a draw
  if (draw) {
    dispatch({
      type: DRAW
    });
  }
};

export const want_to_play_again = (socket, name, room, draw) => dispatch => {
  socket.emit('play again', { name, room, draw });
};

export const rematch = (socket, name) => dispatch => {
  socket.on('replay game', ({ randomlySelectedPlayer }) => {
    dispatch({
      type: REMATCH
    });
    if (name === randomlySelectedPlayer) {
      dispatch({ type: GOES_FIRST });
    }
  });
};

export const oponent_left = socket => dispatch => {
  socket.on('one player left', () => {
    dispatch({ type: ONE_PLAYER_LEFT });
  });
};

export const clear_board = () => {
  return {
    type: DELETE_BOARD
  };
};
