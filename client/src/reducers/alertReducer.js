import { ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = {
  alert: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        alert: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        alert: null
      };
    default:
      return state;
  }
};
