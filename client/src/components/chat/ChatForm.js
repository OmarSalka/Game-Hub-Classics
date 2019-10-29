import React, { useState } from 'react';
import { send_message } from '../../actions/socketRoutingActions';

const ChatForm = () => {
  const [textMessage, setTextMessage] = useState('');

  const onChange = e => {
    setTextMessage(e.target.value);
  };

  const sendMessage = e => {
    e.preventDefault();
    if (textMessage) {
      send_message(textMessage);
      // socket.emit('send message', textMessage);
      setTextMessage('');
    }
  };

  return (
    <form className='message-form' onSubmit={sendMessage}>
      <textarea
        name='text-bar'
        cols='45'
        value={textMessage}
        onChange={onChange}
      ></textarea>
      <div className='send-button' onClick={sendMessage}>
        <i className='far fa-paper-plane'></i>
      </div>
    </form>
  );
};

export default ChatForm;
