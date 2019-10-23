import React from 'react';
import Chat from './Chat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ChatArea = ({ chat: { chatArray } }) => {
  {
    chatArray.length > 0 && console.log(chatArray);
  }
  return (
    <div className=''>
      {chatArray.map(message => (
        <Chat
          key={message.id}
          messageInfo={message}
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
