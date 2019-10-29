import React from 'react';
import { connect } from 'react-redux';

const Chat = ({ messageData: { user, text }, socketRouting: { name } }) => {
  const _user = user;
  const _name = name;

  const style_generator = () => {
    if (_user && _name) {
      if (_user === 'admin') return 'admin-message';
      if (_name === _user) return 'user-message';
      if (_name !== _user) return 'other-message';
    }
  };

  const messageDisplay = `message ${style_generator()}`;

  return (
    <div>
      <div className={messageDisplay}>
        <p className='chat-msg wordwrap'>{text.trim()}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(mapStateToProps)(Chat);
