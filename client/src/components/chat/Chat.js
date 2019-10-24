import React from 'react';
import { connect } from 'react-redux';

const Chat = ({ messageData, style, socketRouting: { name } }) => {
  {
    messageData &&
      console.log('messageData.user:', messageData.user, 'name', name);
  }
  return (
    // <div>
    //   {messageData && messageData.user.trim().toLowerCase() === 'admin' ? (
    //     <div className='admin-message'>
    //       <p>{messageData && messageData.text}</p>
    //     </div>
    //   ) : messageData &&
    //     name.trim().toLowerCase() === messageData.user.trim().toLowerCase() ? (
    //     <div className='user-message'>
    //       <p>{messageData && messageData.text}</p>
    //     </div>
    //   ) : (
    //     messageData &&
    //     name.trim().toLowerCase() === messageData.user.trim().toLowerCase() && (
    //       <div className='other-message'>
    //         <p>{messageData && messageData.text}</p>
    //       </div>
    //     )
    //   )}
    // </div>

    <div
    // style={
    //   messageData &&
    //   name.trim().toLowerCase() === messageData.user.trim().toLowerCase()
    //     ? { textAlign: 'right' }
    //     : { textAlign: 'left' }
    // }
    >
      <div
        className={
          messageData && messageData.user.trim().toLowerCase() === 'admin'
            ? 'admin-message'
            : messageData &&
              name.trim().toLowerCase() ===
                messageData.user.trim().toLowerCase()
            ? 'user-message'
            : messageData &&
              name.trim().toLowerCase() !==
                messageData.user.trim().toLowerCase() &&
              'other-message'
        }
      >
        <p className='wordwrap'>{messageData && messageData.text}</p>
      </div>

      {/* <div style={{ height: '100%' }}>
        <p className={style}>
          <strong>{messageData && `${messageData.user}: `} </strong>
          {messageData && messageData.text}
        </p>
      </div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(mapStateToProps)(Chat);
