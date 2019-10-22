import { ADD_MESSAGE } from './types';

export const add_message = (id, name, message) => {
  return {
    type: ADD_MESSAGE,
    payload: { id: id, name: name, message: message }
  };
};
