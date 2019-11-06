import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  make_move_ttt,
  allowToMakeMove,
  disallowToMakeMove,
  goesFirst,
  display_board_ttt
} from '../../../actions/ticTacToeActions';

// import Box from './Box';

const TicTacToeBoard = ({
  socketRouting: { ttt_BoardData, socket, room, name, icon, users, oponent },
  ticTacToe: {
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
    box9,
    firstMove,
    allowed,
    nextPlayer
  },
  make_move_ttt,
  allowToMakeMove,
  disallowToMakeMove,
  goesFirst,
  display_board_ttt
}) => {
  useEffect(() => {
    display_board_ttt(socket);
  }, [ttt_BoardData]);

  useEffect(() => {
    if (name === nextPlayer) allowToMakeMove();
    if (name !== nextPlayer) disallowToMakeMove();
  }, [nextPlayer]);

  useEffect(() => {
    users[0].name === name && goesFirst();
    firstMove && users.length === 2 && allowToMakeMove();
  }, [, /*firstMove*/ users]);

  const box_1_clicked = () => {
    console.log(`${name}: clicked`);
    make_move_ttt(
      socket,
      { id: 1, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_2_clicked = () => {
    make_move_ttt(
      socket,
      { id: 2, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_3_clicked = () => {
    make_move_ttt(
      socket,
      { id: 3, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_4_clicked = () => {
    make_move_ttt(
      socket,
      { id: 4, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_5_clicked = () => {
    make_move_ttt(
      socket,
      { id: 5, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_6_clicked = () => {
    make_move_ttt(
      socket,
      { id: 6, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_7_clicked = () => {
    make_move_ttt(
      socket,
      { id: 7, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_8_clicked = () => {
    make_move_ttt(
      socket,
      { id: 8, user: name, icon, room },
      firstMove,
      oponent
    );
  };
  const box_9_clicked = () => {
    make_move_ttt(
      socket,
      { id: 9, user: name, icon, room },
      firstMove,
      oponent
    );
  };

  return (
    <div className='tic-tac-toe-board'>
      <div
        className='box box-1'
        onClick={users.length === 2 && allowed ? box_1_clicked : null}
      >
        {box1.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box1.user === name && 'red' }}
          ></i>
        ) : (
          box1.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box1.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-2'
        onClick={users.length === 2 && allowed ? box_2_clicked : null}
      >
        {box2.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box2.user === name && 'red' }}
          ></i>
        ) : (
          box2.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box2.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-3'
        onClick={users.length === 2 && allowed ? box_3_clicked : null}
      >
        {box3.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box3.user === name && 'red' }}
          ></i>
        ) : (
          box3.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box3.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-4'
        onClick={users.length === 2 && allowed ? box_4_clicked : null}
      >
        {box4.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box4.user === name && 'red' }}
          ></i>
        ) : (
          box4.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box4.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-5'
        onClick={users.length === 2 && allowed ? box_5_clicked : null}
      >
        {box5.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box5.user === name && 'red' }}
          ></i>
        ) : (
          box5.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box5.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-6'
        onClick={users.length === 2 && allowed ? box_6_clicked : null}
      >
        {box6.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box6.user === name && 'red' }}
          ></i>
        ) : (
          box6.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box6.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-7'
        onClick={users.length === 2 && allowed ? box_7_clicked : null}
      >
        {box7.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box7.user === name && 'red' }}
          ></i>
        ) : (
          box7.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box7.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-8'
        onClick={users.length === 2 && allowed ? box_8_clicked : null}
      >
        {box8.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box8.user === name && 'red' }}
          ></i>
        ) : (
          box8.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box8.user === name && 'red' }}
            ></i>
          )
        )}
      </div>
      <div
        className='box box-9'
        onClick={users.length === 2 && allowed ? box_9_clicked : null}
      >
        {box9.icon === 'x' ? (
          <i
            className='fas fa-times fa-3x'
            style={{ color: box9.user === name && 'red' }}
          ></i>
        ) : (
          box9.icon === 'o' && (
            <i
              className='far fa-circle fa-3x'
              style={{ color: box9.user === name && 'red' }}
            ></i>
          )
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
  {
    make_move_ttt,
    allowToMakeMove,
    disallowToMakeMove,
    goesFirst,
    display_board_ttt
  }
)(TicTacToeBoard);
