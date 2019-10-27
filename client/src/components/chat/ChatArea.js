import React from 'react';
import Chat from './Chat';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import PropTypes from 'prop-types';

const ChatArea = ({ chat: { chatArray } }) => {
  return (
    <ScrollToBottom>
      {chatArray.map(message => (
        <Chat key={message.id} messageData={message} />
      ))}
    </ScrollToBottom>
  );
};

const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(mapStateToProps)(ChatArea);
