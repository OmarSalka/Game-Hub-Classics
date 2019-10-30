import { GET_BOARD, DELETE_BOARD } from '../actions/types';

const initialState = {
  boxArray: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD:
      return {
        ...state,
        boxArray: action.payload
      };
    case DELETE_BOARD:
      return {
        ...state,
        boxArray: null
      };
    default:
      return state;
  }
};
