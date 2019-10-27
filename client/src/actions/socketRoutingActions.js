import { JOIN, CONNECTION_SUCCESS_TTT, CONNECTION_SUCCESS_DB } from './types';
import { errorLogger } from './alertActions';

export const join = (joinData, game) => dispatch => {
  const { name, room, socket } = joinData;
  socket.emit('join', { name, room }, error => {
    if (!error && game === 'tic_tac_toe') {
      dispatch({ type: CONNECTION_SUCCESS_TTT });
    } else if (!error && game === 'dots_boxes') {
      dispatch({ type: CONNECTION_SUCCESS_DB });
    }
    dispatch(errorLogger({ type: 'danger', msg: error }));
    // dispatch({
    //   type:ERROR,
    //   payload: error
    // })
    // console.log(error);
  });

  dispatch({
    type: JOIN,
    payload: joinData
  });
};

export const disconnect_socket = socket => dispatch => {
  socket.disconnect();
};
