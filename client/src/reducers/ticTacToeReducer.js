import { GET_INITIAL_BOARD, GET_BOARD, DELETE_BOARD } from '../actions/types';

const initialState = {
  ttt_BoardData: null,
  box1: { id: 1, icon: null, user: null },
  box2: { id: 2, icon: null, user: null },
  box3: { id: 3, icon: null, user: null },
  box4: { id: 4, icon: null, user: null },
  box5: { id: 5, icon: null, user: null },
  box6: { id: 6, icon: null, user: null },
  box7: { id: 7, icon: null, user: null },
  box8: { id: 8, icon: null, user: null },
  box9: { id: 9, icon: null, user: null }
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
    case DELETE_BOARD:
      return {
        ...state,
        ttt_BoardData: null,
        box1: { id: 1, icon: null, user: null },
        box2: { id: 2, icon: null, user: null },
        box3: { id: 3, icon: null, user: null },
        box4: { id: 4, icon: null, user: null },
        box5: { id: 5, icon: null, user: null },
        box6: { id: 6, icon: null, user: null },
        box7: { id: 7, icon: null, user: null },
        box8: { id: 8, icon: null, user: null },
        box9: { id: 9, icon: null, user: null }
      };
    default:
      return state;
  }
};
