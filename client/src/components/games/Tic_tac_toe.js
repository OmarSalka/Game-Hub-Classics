import React, { useEffect } from 'react';
import ChatArea from '../chat/ChatArea';
import ChatForm from '../chat/ChatForm';
import OnlinePlayers from '../roomData/OnlinePlayers';
import ScoreBoard from './tic_tac_toe/ScoreBoard';
import TicTacToeBoard from './tic_tac_toe/TicTacToeBoard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { display_message, send_message } from '../../actions/chatActions';
import { display_board_ttt } from '../../actions/ticTacToeActions';
import { disconnect_socket } from '../../actions/socketRoutingActions';

const Tic_tac_toe = ({
  socketRouting: { name, users, socket },
  ticTacToe: { nextPlayer, firstMove, won, lost },
  display_message,
  disconnect_socket
}) => {
  useEffect(() => {
    display_message(socket);
    // display_board_ttt(socket);

    return () => {
      disconnect_socket(socket);
      // delete_board(socket, room);
    };
    // eslint-disable-next-line
  }, [socket]);

  return (
    <div id='tic-tac-toe'>
      <div className='btn leave' style={{ padding: '0rem' }}>
        <Link
          to='/'
          className='leave'
          style={{ padding: '0.4rem 1.3rem', borderRadius: '10px' }}
        >
          Leave &nbsp;&nbsp;
          <i className='far fa-times-circle'></i>
        </Link>
      </div>
      <div className='game-space'>
        <div className='game-chat-layout'>
          <div className='game-box'>
            <ScoreBoard />
            <div className='live-updates'>
              {won ? (
                <p>You win!!</p>
              ) : lost ? (
                <p>You lose</p>
              ) : nextPlayer && nextPlayer === name ? (
                <p>It's your turn!</p>
              ) : nextPlayer && nextPlayer !== name ? (
                <p>It's {nextPlayer}'s turn!</p>
              ) : firstMove && users.length === 2 ? (
                <p>Your move, {name}!</p>
              ) : users.length === 2 ? (
                <p>Your oponent goes first</p>
              ) : (
                <p>Waiting for your oponent to join...</p>
              )}
            </div>

            <TicTacToeBoard />
          </div>
          <div className='chat-box'>
            <OnlinePlayers />
            <ChatArea />
            <ChatForm />
          </div>
        </div>
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
  { display_message, send_message, disconnect_socket, display_board_ttt }
)(Tic_tac_toe);
