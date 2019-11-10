import {
  GET_INITIAL_BOARD,
  GET_BOARD,
  DELETE_BOARD,
  GOES_FIRST,
  MADE_FIRST_MOVE,
  ALLOW_TO_PLAY,
  DISALLOW_TO_PLAY,
  ASSIGN_NEXT_TURN,
  PLAYER_WON,
  OPONENT_WON,
  REMATCH,
  ONE_PLAYER_LEFT,
  DRAW
} from '../actions/types';

const initialState = {
  ttt_BoardData: [
    { id: 1, icon: null, user: null },
    { id: 2, icon: null, user: null },
    { id: 3, icon: null, user: null },
    { id: 4, icon: null, user: null },
    { id: 5, icon: null, user: null },
    { id: 6, icon: null, user: null },
    { id: 7, icon: null, user: null },
    { id: 8, icon: null, user: null },
    { id: 9, icon: null, user: null }
  ],
  box1: { id: 1, icon: null, user: null },
  box2: { id: 2, icon: null, user: null },
  box3: { id: 3, icon: null, user: null },
  box4: { id: 4, icon: null, user: null },
  box5: { id: 5, icon: null, user: null },
  box6: { id: 6, icon: null, user: null },
  box7: { id: 7, icon: null, user: null },
  box8: { id: 8, icon: null, user: null },
  box9: { id: 9, icon: null, user: null },
  firstMove: false,
  allowed: false,
  nextPlayer: null,
  playerScore: 0,
  oponentScore: 0,
  winPiece1: null,
  winPiece2: null,
  winPiece3: null,
  winner: null,
  won: null,
  lost: null,
  draw: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_BOARD:
    case GET_BOARD:
      return {
        ...state,
        ttt_BoardData: action.payload,
        box1: action.payload[0],
        box2: action.payload[1],
        box3: action.payload[2],
        box4: action.payload[3],
        box5: action.payload[4],
        box6: action.payload[5],
        box7: action.payload[6],
        box8: action.payload[7],
        box9: action.payload[8]
      };
    case GOES_FIRST:
      return {
        ...state,
        firstMove: true,
        allowed: true
      };
    case MADE_FIRST_MOVE:
      return {
        ...state,
        firstMove: false
      };
    case ALLOW_TO_PLAY:
      return {
        ...state,
        allowed: true
      };
    case DISALLOW_TO_PLAY:
      return {
        ...state,
        allowed: false
      };
    case ASSIGN_NEXT_TURN:
      return {
        ...state,
        nextPlayer: action.payload
      };
    case PLAYER_WON:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        winPiece1: action.payload.winningPiece1,
        winPiece2: action.payload.winningPiece2,
        winPiece3: action.payload.winningPiece3,
        winner: action.payload.winner,
        won: true,
        lost: false
      };
    case OPONENT_WON:
      return {
        ...state,
        oponentScore: state.oponentScore + 1,
        winPiece1: action.payload.winningPiece1,
        winPiece2: action.payload.winningPiece2,
        winPiece3: action.payload.winningPiece3,
        winner: action.payload.winner,
        won: false,
        lost: true
      };
    case DRAW:
      return {
        ...state,
        draw: true
      };
    case REMATCH:
      return {
        ...state,
        winPiece1: null,
        winPiece2: null,
        winPiece3: null,
        won: false,
        lost: false,
        draw: false,
        winner: null,
        nextPlayer: null
      };
    case DELETE_BOARD:
    case ONE_PLAYER_LEFT:
      return initialState;

    default:
      return state;
  }
};
