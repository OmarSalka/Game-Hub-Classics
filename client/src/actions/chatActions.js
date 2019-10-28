import { DISPLAY_MESSAGE, DELETE_CHAT } from './types';

export const display_message = socket => dispatch => {
  console.log('chat action here!');
  socket.on('message', message => {
    console.log(message);
    const { id, user, text } = message;
    dispatch({
      type: DISPLAY_MESSAGE,
      payload: { id, user, text }
    });
  });
};

export const send_message = (socket, chatMessage) => {
  socket.emit('send message', chatMessage);
};

export const delete_chat = () => {
  return {
    type: DELETE_CHAT
  };
};
