import { DISPLAY_MESSAGE } from './types';

// export const add_message = (id, name, message) => {
//   return {
//     type: ADD_MESSAGE,
//     payload: { id: id, name: name, message: message }
//   };
// };

export const display_message = socket => dispatch => {
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
