import {
  JOIN,
  T3_JOIN_SUCCESS,
  DB_JOIN_SUCCESS,
  DISCONNECT,
  DISPLAY_WELCOME_MESSAGE,
  GET_ROOM_DATA
} from "./types";
import { errorLogger } from "./alertActions";
import { delete_chat } from "./chatActions";
import { clear_board } from "./ticTacToeActions";

import io from "socket.io-client";

let socket;
const ENDPOINT = `:${process.env.PORT || 5000}`;

export const join = (joinData, game) => dispatch => {
  socket = io("https://gamehubclassics.com", { secure: true });
  // socket = io(ENDPOINT, {secure: true});
  const { name, room } = joinData;

  // join
  socket.emit("join", { name, room }, error => {
    if (error) {
      dispatch(errorLogger({ type: "danger", msg: error }));
    } else {
      game === "tic_tac_toe"
        ? dispatch({ type: T3_JOIN_SUCCESS })
        : game === "dots_boxes" && dispatch({ type: DB_JOIN_SUCCESS });
    }
  });

  // send welcome message
  socket.once("message", message => {
    const { id, user, text } = message;
    dispatch({
      type: DISPLAY_WELCOME_MESSAGE,
      payload: { id, user, text }
    });
  });

  dispatch({
    type: JOIN,
    payload: { name, room, socket }
  });

  dispatch(getOnlineUsers(name));
};

// get online users
export const getOnlineUsers = name => dispatch => {
  socket.on("room data", roomData => {
    const { users } = roomData;
    const existingOponent = users.find(user => user.name !== name);
    const icon = users.find(user => user.name === name).icon;
    let oponent;
    if (existingOponent) oponent = existingOponent.name;
    dispatch({
      type: GET_ROOM_DATA,
      payload: { users, oponent, icon }
    });
  });
};

// display message
export const display_message = () => dispatch => {
  socket.on("message", message => {
    const { id, user, text } = message;
    dispatch({
      type: DISPLAY_WELCOME_MESSAGE,
      payload: { id, user, text }
    });
  });
};

// send message
export const send_message = textMessage => {
  socket.emit("send message", textMessage);
};

// disconnect
export const disconnect_socket = socket => dispatch => {
  socket.disconnect();
  dispatch({
    type: DISCONNECT
  });
  dispatch(delete_chat());
  dispatch(clear_board());
};
