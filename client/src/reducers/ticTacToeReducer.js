import { TTTBOX_CLICKED } from '../actions/types';

const initialState = {
  boxState: 'empty'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TTTBOX_CLICKED:
      return {
        ...state,
        boxState: 'full'
      };
    default:
      return state;
  }
};
