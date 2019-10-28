import { JOIN, T3_JOIN_SUCCESS, DB_JOIN_SUCCESS, DISCONNECT } from './types';
import { errorLogger } from './alertActions';
import { display_message } from './chatActions';
import { delete_chat } from './chatActions';

export const join = (joinData, game) => dispatch => {
  const { name, room, socket } = joinData;

  socket.emit('join', { name, room }, error => {
    if (error) {
      dispatch(errorLogger({ type: 'danger', msg: error }));
    } else {
      {
        game === 'tic_tac_toe'
          ? dispatch({ type: T3_JOIN_SUCCESS })
          : game === 'dots_boxes' && dispatch({ type: DB_JOIN_SUCCESS });
      }
      // console.log('hreere: ', socket);
      dispatch(display_message(socket));
    }
  });

  dispatch({
    type: JOIN,
    payload: joinData
  });
};

export const disconnect_socket = socket => dispatch => {
  socket.disconnect();
  dispatch({
    type: DISCONNECT
  });
  dispatch(delete_chat());
};
