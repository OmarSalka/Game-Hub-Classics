import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOnlineUsers } from '../../actions/socketRoutingActions';

const OnlinePlayers = ({ socketRouting: { users, name } }) => {
  useEffect(() => {
    getOnlineUsers(name);
    // eslint-disable-next-line
  }, [users]);

  return (
    <div className='live-users'>
      <h3>Online Players:</h3>
      {users.map(userData => (
        <p key={userData.id}>
          <i className='fas fa-circle' style={{ color: '#0deb0d' }}></i>
          &nbsp;
          {userData.name}
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(
  mapStateToProps,
  {}
)(OnlinePlayers);
