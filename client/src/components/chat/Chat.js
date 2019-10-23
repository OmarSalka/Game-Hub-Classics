import React from 'react';
import { connect } from 'react-redux';

const Chat = ({ messageInfo, style, socketRouting: { name } }) => {
  return (
    <div
      style={
        messageInfo && name === messageInfo.name
          ? { textAlign: 'right' }
          : { textAlign: 'left' }
      }
    >
      <p className={style}>
        <strong>{messageInfo && `${messageInfo.name}: `} </strong>
        {messageInfo && messageInfo.message}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(mapStateToProps)(Chat);
