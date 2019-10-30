import React, { useEffect, useState } from 'react';
import ChatArea from '../chat/ChatArea';
import ChatForm from '../chat/ChatForm';
import OnlinePlayers from '../roomData/OnlinePlayers';
import ScoreBoard from './tic_tac_toe/ScoreBoard';
import TicTacToeBoard from './tic_tac_toe/TicTacToeBoard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { display_message, send_message } from '../../actions/chatActions';
import { delete_board, display_board } from '../../actions/ticTacToeActions';
import { disconnect_socket } from '../../actions/socketRoutingActions';

const Tic_tac_toe = ({
  socketRouting: { oponent, name, room, socket, is_Authenticated, tic_tac_toe },
  display_message,
  disconnect_socket,
  display_board
}) => {
  useEffect(() => {
    display_message(socket);
    display_board(socket);

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
  socketRouting: state.socketRouting
});

export default connect(
  mapStateToProps,
  { display_message, send_message, disconnect_socket, display_board }
)(Tic_tac_toe);
