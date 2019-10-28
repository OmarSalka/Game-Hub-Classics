import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { join } from '../../actions/socketRoutingActions';
import { display_message } from '../../actions/chatActions';

import Alert from '../alert/Alert';
import PropTypes from 'prop-types';

import io from 'socket.io-client';

// let socket;

const Join = ({
  history,
  match,
  join,
  display_message,
  socketRouting: { is_Authenticated, tic_tac_toe, dots_boxes }
}) => {
  const [formInput, setFormInput] = useState({
    name: '',
    room: ''
  });
  const [socket, setSocket] = useState('');

  const ENDPOINT = `:${process.env.PORT || 5000}`;

  const { name, room } = formInput;

  let game;

  if (match.path === '/join/t3') game = 'tic_tac_toe';
  if (match.path === '/join/db') game = 'dots_boxes';

  useEffect(() => {
    if (socket) {
      join({ name, room, socket }, game);
      // display_message(socket);
      // console.log('heeeeeeeeeeeeeeeeeeeey');
    }

    if (is_Authenticated && tic_tac_toe) history.push('/tic-tac-toe');
    if (is_Authenticated && dots_boxes) history.push('/dots-boxes');

    return () => {
      console.log('gone...');
    };

    // eslint-disable-next-line
  }, [is_Authenticated, tic_tac_toe, dots_boxes, socket]);

  const onChange = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setSocket(io(ENDPOINT));
    // socket = io(ENDPOINT);
    // join({ name, room, socket }, game);
    // display_message(socket);
  };

  return (
    <div id='join'>
      <h1>Welcome!</h1>
      <form onSubmit={onSubmit} className='form-sm'>
        <Alert />
        <label htmlFor='name'>Enter name:</label>
        <input type='text' name='name' value={name} onChange={onChange} />
        <label htmlFor='room'>Enter room:</label>
        <input type='text' name='room' value={room} onChange={onChange} />
        <input className='btn-primary' type='submit' value='Join' />
      </form>
    </div>
  );
};

Join.propTypes = {
  socketRouting: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(
  mapStateToProps,
  { join, display_message }
)(Join);
