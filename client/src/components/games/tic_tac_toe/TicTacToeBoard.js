import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  make_move_ttt,
  allowToMakeMove,
  disallowToMakeMove,
  goesFirst,
  display_board_ttt,
  checkForWinner,
  oponent_left
} from '../../../actions/ticTacToeActions';
import PopUp from './PopUp';

// import Box from './Box';

const TicTacToeBoard = ({
  socketRouting: { socket, room, name, icon, users, oponent },
  ticTacToe: {
    ttt_BoardData,
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
    nextPlayer,
    winPiece1,
    winPiece2,
    winPiece3,
    won,
    lost
  },
  make_move_ttt,
  allowToMakeMove,
  disallowToMakeMove,
  goesFirst,
  checkForWinner,
  display_board_ttt,
  oponent_left
}) => {
  useEffect(() => {
    display_board_ttt(socket);
    checkForWinner(ttt_BoardData, name);
    oponent_left(socket);
    // eslint-disable-next-line
  }, [ttt_BoardData]);

  useEffect(() => {
    if (name === nextPlayer) allowToMakeMove();
    if (name !== nextPlayer && !firstMove) disallowToMakeMove();
    // eslint-disable-next-line
  }, [nextPlayer]);

  useEffect(() => {
    users[0].name === name && goesFirst();
    if (firstMove && users.length === 2) allowToMakeMove();
    // eslint-disable-next-line
  }, [users]);

  const box_1_clicked = () => {
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
    <Fragment>
      <div className='tic-tac-toe-board'>
        <div
          className={`box box-1 ${
            (winPiece1 === 1 || winPiece2 === 1 || winPiece3 === 1) && won
              ? 'you-win'
              : (winPiece1 === 1 || winPiece2 === 1 || winPiece3 === 1) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box1.icon ? box_1_clicked : null
          }
        >
          {box1.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box1.user === name && 'gold' }}
            ></i>
          ) : (
            box1.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box1.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-2 ${
            (winPiece1 === 2 || winPiece2 === 2 || winPiece3 === 2) && won
              ? 'you-win'
              : (winPiece1 === 2 || winPiece2 === 2 || winPiece3 === 2) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box2.icon ? box_2_clicked : null
          }
        >
          {box2.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box2.user === name && 'gold' }}
            ></i>
          ) : (
            box2.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box2.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-3 ${
            (winPiece1 === 3 || winPiece2 === 3 || winPiece3 === 3) && won
              ? 'you-win'
              : (winPiece1 === 3 || winPiece2 === 3 || winPiece3 === 3) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box3.icon ? box_3_clicked : null
          }
        >
          {box3.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box3.user === name && 'gold' }}
            ></i>
          ) : (
            box3.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box3.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-4 ${
            (winPiece1 === 4 || winPiece2 === 4 || winPiece3 === 4) && won
              ? 'you-win'
              : (winPiece1 === 4 || winPiece2 === 4 || winPiece3 === 4) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box4.icon ? box_4_clicked : null
          }
        >
          {box4.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box4.user === name && 'gold' }}
            ></i>
          ) : (
            box4.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box4.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-5 ${
            (winPiece1 === 5 || winPiece2 === 5 || winPiece3 === 5) && won
              ? 'you-win'
              : (winPiece1 === 5 || winPiece2 === 5 || winPiece3 === 5) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box5.icon ? box_5_clicked : null
          }
        >
          {box5.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box5.user === name && 'gold' }}
            ></i>
          ) : (
            box5.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box5.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-6 ${
            (winPiece1 === 6 || winPiece2 === 6 || winPiece3 === 6) && won
              ? 'you-win'
              : (winPiece1 === 6 || winPiece2 === 6 || winPiece3 === 6) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box6.icon ? box_6_clicked : null
          }
        >
          {box6.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box6.user === name && 'gold' }}
            ></i>
          ) : (
            box6.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box6.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-7 ${
            (winPiece1 === 7 || winPiece2 === 7 || winPiece3 === 7) && won
              ? 'you-win'
              : (winPiece1 === 7 || winPiece2 === 7 || winPiece3 === 7) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box7.icon ? box_7_clicked : null
          }
        >
          {box7.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box7.user === name && 'gold' }}
            ></i>
          ) : (
            box7.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box7.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-8 ${
            (winPiece1 === 8 || winPiece2 === 8 || winPiece3 === 8) && won
              ? 'you-win'
              : (winPiece1 === 8 || winPiece2 === 8 || winPiece3 === 8) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box8.icon ? box_8_clicked : null
          }
        >
          {box8.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box8.user === name && 'gold' }}
            ></i>
          ) : (
            box8.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box8.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        <div
          className={`box box-9 ${
            (winPiece1 === 9 || winPiece2 === 9 || winPiece3 === 9) && won
              ? 'you-win'
              : (winPiece1 === 9 || winPiece2 === 9 || winPiece3 === 9) && lost
              ? 'you-lose'
              : null
          }`}
          onClick={
            users.length === 2 && allowed && !box9.icon ? box_9_clicked : null
          }
        >
          {box9.icon === 'x' ? (
            <i
              className='fas fa-times fa-3x'
              style={{ color: box9.user === name && 'gold' }}
            ></i>
          ) : (
            box9.icon === 'o' && (
              <i
                className='far fa-circle fa-3x'
                style={{ color: box9.user === name && 'gold' }}
              ></i>
            )
          )}
        </div>
        {won || lost ? <PopUp /> : null}
      </div>
    </Fragment>
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
    checkForWinner,
    display_board_ttt,
    oponent_left
  }
)(TicTacToeBoard);
