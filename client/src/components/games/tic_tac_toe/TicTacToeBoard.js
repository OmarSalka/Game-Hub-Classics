import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  display_board_ttt,
  make_move_ttt
  // delete_board
} from '../../../actions/ticTacToeActions';

import Box from './Box';

const TicTacToeBoard = ({
  socketRouting: { socket, room, name, icon }, // create icon variable in socket router reducer and actions
  ticTacToe: { boxArray },
  display_board_ttt,
  make_move_ttt
}) => {
  useEffect(() => {
    display_board_ttt(socket, room);

    // eslint-disable-next-line
  }, [socket, boxArray]);

  const box_1_clicked = () => {
    make_move_ttt(socket, { id: 1, user: name, icon, room });
  };
  const box_2_clicked = () => {
    make_move_ttt(socket, { id: 2, user: name, icon, room });
  };
  const box_3_clicked = () => {
    make_move_ttt(socket, { id: 3, user: name, icon, room });
  };
  const box_4_clicked = () => {
    make_move_ttt(socket, { id: 4, user: name, icon, room });
  };
  const box_5_clicked = () => {
    make_move_ttt(socket, { id: 5, user: name, icon, room });
  };
  const box_6_clicked = () => {
    make_move_ttt(socket, { id: 6, user: name, icon, room });
  };
  const box_7_clicked = () => {
    make_move_ttt(socket, { id: 7, user: name, icon, room });
  };
  const box_8_clicked = () => {
    make_move_ttt(socket, { id: 8, user: name, icon, room });
  };
  const box_9_clicked = () => {
    make_move_ttt(socket, { id: 9, user: name, icon, room });
  };

  return (
    <div className='tic-tac-toe-board'>
      <div className='box box-1' onClick={box_1_clicked}>
        1
      </div>
      <div className='box box-2' onClick={box_2_clicked}>
        2
      </div>
      <div className='box box-3' onClick={box_3_clicked}>
        3
      </div>
      <div className='box box-4' onClick={box_4_clicked}>
        4
      </div>
      <div className='box box-5' onClick={box_5_clicked}>
        5
      </div>
      <div className='box box-6' onClick={box_6_clicked}>
        6
      </div>
      <div className='box box-7' onClick={box_7_clicked}>
        7
      </div>
      <div className='box box-8' onClick={box_8_clicked}>
        8
      </div>
      <div className='box box-9' onClick={box_9_clicked}>
        9
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  socketRouting: state.socketRouting,
  ticTacToe: state.ticTacToe
});
export default connect(
  mapStateToProps,
  { display_board_ttt, make_move_ttt }
)(TicTacToeBoard);
