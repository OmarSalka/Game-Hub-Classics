import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { join } from '../../actions/socketRoutingActions';
import Alert from '../alert/Alert';
import PropTypes from 'prop-types';

import io from 'socket.io-client';

let socket;

const Join = ({
  history,
  alert: { alert },
  join,
  socketRouting: { isAuthenticated, tic_tac_toe, dots_boxes }
}) => {
  const [formInput, setFormInput] = useState({
    name: '',
    room: ''
  });

  const ENDPOINT = `:${process.env.PORT || 5000}`;

  const { name, room } = formInput;

  useEffect(() => {
    console.log('this is your alert', alert);
    if (!alert) {
      // history.push('/tic-tac-toe');
      // function() => {
      //   <Redirect to='/tic-tac-toe' />;
      // };
    }
    // eslint-disable-next-line
  }, [alert, history]);

  // const onClick = e => {
  //   e.preventDefault();
  //   socket = io(ENDPOINT);
  //   join({ name, room, socket });
  //   console.log('this is your alert', alert);
  //   if (alert) {
  //     e.preventDefault();
  //   }

  //   // if (!name || !room) {
  //   //   e.preventDefault();
  //   // } else if (name && room) {
  //   //   socket = io(ENDPOINT);
  //   //   join({ name, room, socket });
  //   //   // socket.emit('join', { name, room }, error => {
  //   //   //   console.log(error);
  //   //   // });
  //   // }
  // };

  const onChange = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    socket = io(ENDPOINT);
    join({ name, room, socket }, 'tic_tac_toe');

    // e.preventDefault();
    // if (name && room) {
    //   join({ name, room });
    // }
  };

  return (
    <div id='join'>
      {!isAuthenticated && tic_tac_toe && <Redirect to='/tic-tac-toe' />}
      {!isAuthenticated && dots_boxes && <Redirect to='/dots-boxes' />}
      <h1>Welcome!</h1>
      <form onSubmit={onSubmit} className='form-sm'>
        <Alert />
        <label htmlFor='name'>Enter name:</label>
        <input type='text' name='name' value={name} onChange={onChange} />
        <label htmlFor='room'>Enter room:</label>
        <input type='text' name='room' value={room} onChange={onChange} />
        <input className='btn-primary' type='submit' value='Join' />
        {/* <Link onClick={onClick} to='/tic-tac-toe'>
          <input className='btn-primary' type='submit' value='Join' />
        </Link> */}
      </form>
    </div>
  );
};

Join.propTypes = {
  alert: PropTypes.object.isRequired,
  socketRouting: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  alert: state.alert,
  socketRouting: state.socketRouting
});

export default connect(
  mapStateToProps,
  { join }
)(Join);
