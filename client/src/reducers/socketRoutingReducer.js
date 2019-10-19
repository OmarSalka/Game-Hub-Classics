import { JOIN } from '../actions/types';

const initialState = {
  name: null,
  room: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOIN:
      return {
        ...state,
        name: action.payload.name,
        room: action.payload.room
      };
    default:
      return state;
  }
};
