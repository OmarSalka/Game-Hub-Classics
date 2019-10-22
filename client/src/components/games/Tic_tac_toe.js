import React, { useEffect, useState } from 'react';
import ChatArea from '../chat/ChatArea';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { add_message } from '../../actions/chatActions';
import uuid from 'uuid';

let socket;

const Tic_tac_toe = ({ socketRouting: { name, room }, add_message }) => {
  const [chatMessage, setChatMessage] = useState('');
  const ENDPOINT = `:${process.env.PORT || 5000}`;

  // if (!socket) {
  //   socket = io(`:${process.env.PORT || 5000}`);
  //   // to get back message sent by sender for it to get displayed on their screen
  //   socket.on('chat message', msg => {
  //     console.log(`back from server, ${msg}`);
  //   });
  // }

  useEffect(() => {
    socket = io(ENDPOINT);
    // console.log(socket);
    socket.emit('join', { name, room }, () => {});
    // socket.on('chat message', msg => {
    //   console.log(`back from server, ${msg}`);
    // });
    // when component unmounts, basically when user leaves
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    return () => {
      socket.emit('disconnect');

      socket.off();
    };
    // eslint-disable-next-line
  }, []);

  const onChange = e => {
    setChatMessage(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(name, room); //========================================
    if (chatMessage) {
      socket.emit('chat message', chatMessage);
      console.log(chatMessage);
      add_message(uuid.v4(), name, chatMessage);
      setChatMessage('');
    }
  };
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
                <span className='player-name'>Player1:</span> 0
              </p>
              <p>
                <span className='player-name'>Player2:</span> 0
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
            <div className='chat-content'>
              <ChatArea />
            </div>
            <form className='message-form' onSubmit={onSubmit}>
              <textarea
                name='text-bar'
                cols='45'
                value={chatMessage}
                onChange={onChange}
              ></textarea>
              <div className='send-button' onClick={onSubmit}>
                <i className='far fa-paper-plane'></i>
              </div>
            </form>
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
  { add_message }
)(Tic_tac_toe);
