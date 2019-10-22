import { ADD_MESSAGE } from '../actions/types';

const initialState = {
  chatArray: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        chatArray: [
          ...state.chatArray,
          {
            id: action.payload.id,
            name: action.payload.name,
            message: action.payload.message
          }
        ]
      };
    default:
      return state;
  }
};
