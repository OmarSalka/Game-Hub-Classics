import React from 'react';

const Chat = ({ messageInfo }) => {
  return (
    <div>
      <p>
        <strong>{messageInfo && `${messageInfo.name}: `} </strong>
        {messageInfo && messageInfo.message}
      </p>
    </div>
  );
};

export default Chat;
