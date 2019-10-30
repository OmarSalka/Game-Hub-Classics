import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { display_board, delete_board } from '../../../actions/ticTacToeActions';

import Box from './Box';

const TicTacToeBoard = ({
  socketRouting: { socket, room },
  ticTacToe: { boxArray },
  delete_board
}) => {
  useEffect(() => {
    // display_board(socket);
    console.log(boxArray);
    // eslint-disable-next-line
  }, [socket, boxArray]);

  return (
    <div className='tic-tac-toe-board'>
      {boxArray &&
        boxArray.map(box => (
          <Box key={box.id} id={box.id} icon={box.icon} user={box.user} />
        ))}
      {/* <div className='box-1'>1</div> */}
      {/* <div className='box two'>2</div>
      <div className='box three'>3</div>
      <div className='box four'>4</div>
      <div className='box five'>5</div>
      <div className='box six'>6</div>
      <div className='box seven'>7</div>
      <div className='box eight'>8</div>
      <div className='box nine'>9</div> */}
    </div>
  );
};
const mapStateToProps = state => ({
  socketRouting: state.socketRouting,
  ticTacToe: state.ticTacToe
});
export default connect(
  mapStateToProps,
  { delete_board }
)(TicTacToeBoard);
