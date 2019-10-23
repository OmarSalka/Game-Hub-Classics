import React from 'react';
import Chat from './Chat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ChatArea = ({ chat: { chatArray } }) => {
  {
    chatArray.length > 0 &&
      chatArray.map(message => {
        console.log(message.id, message.user, message.text);
      });
  }
  return (
    <div className=''>
      {chatArray.map(message => (
        <Chat
          key={message.id}
          messageData={message}
          style={chatArray.length > 1 ? 'message' : null}
        />
      ))}
      <Chat />
    </div>
  );
};

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(mapStateToProps)(ChatArea);
