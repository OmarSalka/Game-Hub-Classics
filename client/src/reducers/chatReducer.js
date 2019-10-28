import { DISPLAY_MESSAGE, DELETE_CHAT } from '../actions/types';

const initialState = {
  chatArray: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return {
        ...state,
        chatArray: [
          ...state.chatArray,
          {
            id: action.payload.id,
            user: action.payload.user,
            text: action.payload.text
          }
        ]
      };
    case DELETE_CHAT:
      return {
        ...state,
        chatArray: []
      };
    default:
      return state;
  }
};
