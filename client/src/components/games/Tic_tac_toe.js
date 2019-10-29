import React, { useEffect, useState } from 'react';
import ChatArea from '../chat/ChatArea';
import ChatForm from '../chat/ChatForm';
import OnlinePlayers from '../roomData/OnlinePlayers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { display_message, send_message } from '../../actions/chatActions';
import { disconnect_socket } from '../../actions/socketRoutingActions';

const Tic_tac_toe = ({
  socketRouting: { oponent, name, socket, is_Authenticated, tic_tac_toe },
  display_message,
  disconnect_socket
}) => {
  useEffect(() => {
    display_message(socket);

    return () => {
      disconnect_socket(socket);
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
            <div className='score-box'>
              <p>
                <span className='player-name'>{name}:</span> 0
              </p>
              <p>
                <span className='player-name'>
                  {oponent ? oponent : 'Oponent'}:
                </span>{' '}
                0
              </p>
            </div>
            <div className='tic-tac-toe-board'>
              <div className='box one'>1</div>
              <div className='box two'>2</div>
              <div className='box three'>3</div>
              <div className='box four'>4</div>
              <div className='box five'>5</div>
              <div className='box six'>6</div>
              <div className='box seven'>7</div>
              <div className='box eight'>8</div>
              <div className='box nine'>9</div>
            </div>
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
  { display_message, send_message, disconnect_socket }
)(Tic_tac_toe);
