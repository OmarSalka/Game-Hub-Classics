import {
  JOIN,
  T3_JOIN_SUCCESS,
  DB_JOIN_SUCCESS,
  DISCONNECT,
  DISPLAY_WELCOME_MESSAGE,
  GET_ROOM_DATA
} from './types';
import { errorLogger } from './alertActions';
// import { display_message } from './chatActions';
import { delete_chat } from './chatActions';

import io from 'socket.io-client';

let socket;
const ENDPOINT = `:${process.env.PORT || 5000}`;

export const join = (joinData, game) => dispatch => {
  socket = io(ENDPOINT);
  const { name, room } = joinData;

  socket.emit('join', { name, room }, error => {
    if (error) {
      dispatch(errorLogger({ type: 'danger', msg: error }));
    } else {
      {
        game === 'tic_tac_toe'
          ? dispatch({ type: T3_JOIN_SUCCESS })
          : game === 'dots_boxes' && dispatch({ type: DB_JOIN_SUCCESS });
      }
    }
  });

  socket.once('message', message => {
    const { id, user, text } = message;
    dispatch({
      type: DISPLAY_WELCOME_MESSAGE,
      payload: { id, user, text }
    });
  });

  socket.once('room data', roomData => {
    const { room, users } = roomData;
    dispatch({
      type: GET_ROOM_DATA,
      payload: users
    });
  });

  dispatch({
    type: JOIN,
    payload: { name, room, socket }
  });

  dispatch(getOnlineUsers(name));
};

export const getOnlineUsers = name => dispatch => {
  socket.on('room data', roomData => {
    const { room, users } = roomData;
    const existingOponent = users.find(user => user.name !== name);
    let oponent;
    if (existingOponent) oponent = existingOponent.name;
    dispatch({
      type: GET_ROOM_DATA,
      payload: { users, oponent }
    });
  });
};

export const display_message = () => dispatch => {
  socket.on('message', message => {
    const { id, user, text } = message;
    dispatch({
      type: DISPLAY_WELCOME_MESSAGE,
      payload: { id, user, text }
    });
  });
};

export const send_message = textMessage => {
  socket.emit('send message', textMessage);
};

export const disconnect_socket = socket => dispatch => {
  socket.disconnect();
  dispatch({
    type: DISCONNECT
  });
  dispatch(delete_chat());
};
