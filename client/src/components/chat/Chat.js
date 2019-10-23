import React from 'react';
import { connect } from 'react-redux';

const Chat = ({ messageData, style, socketRouting: { name } }) => {
  {
    messageData &&
      console.log('messageData.user:', messageData.user, 'name', name);
  }
  return (
    <div
      style={
        messageData &&
        name.trim().toLowerCase() === messageData.user.trim().toLowerCase()
          ? { textAlign: 'right' }
          : { textAlign: 'left' }
      }
    >
      <div>
        <span className={style}>
          <strong>{messageData && `${messageData.user}: `} </strong>
          {messageData && messageData.text}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(mapStateToProps)(Chat);
