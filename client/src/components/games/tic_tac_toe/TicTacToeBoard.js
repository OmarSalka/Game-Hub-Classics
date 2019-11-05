import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { make_move_ttt } from '../../../actions/ticTacToeActions';

// import Box from './Box';

const TicTacToeBoard = ({
  socketRouting: { socket, room, name, icon },
  ticTacToe: { box1, box2, box3, box4, box5, box6, box7, box8, box9 },
  make_move_ttt
}) => {
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
        {box1.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box1.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-2' onClick={box_2_clicked}>
        {box2.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box2.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-3' onClick={box_3_clicked}>
        {box3.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box3.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-4' onClick={box_4_clicked}>
        {box4.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box4.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-5' onClick={box_5_clicked}>
        {box5.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box5.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-6' onClick={box_6_clicked}>
        {box6.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box6.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-7' onClick={box_7_clicked}>
        {box7.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box7.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-8' onClick={box_8_clicked}>
        {box8.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box8.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
      </div>
      <div className='box box-9' onClick={box_9_clicked}>
        {box9.icon === 'x' ? (
          <i className='fas fa-times fa-3x'></i>
        ) : (
          box9.icon === 'o' && <i className='far fa-circle fa-3x'></i>
        )}
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
  { make_move_ttt }
)(TicTacToeBoard);
