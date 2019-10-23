import { JOIN } from './types';

export const join = formData => {
  return {
    type: JOIN,
    payload: formData
  };
};

export const disconnect_socket = socket => {
  socket.emit('disconnect');
  socket.off();
};
