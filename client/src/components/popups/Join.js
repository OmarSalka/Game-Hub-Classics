import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { join } from '../../actions/socketRoutingActions';

const Join = ({ join }) => {
  const [formInput, setFormInput] = useState({
    name: '',
    room: ''
  });

  const { name, room } = formInput;

  const onClick = e => {
    if (!name || !room) {
      e.preventDefault();
    } else if (name && room) {
      join({ name, room });
    }
  };
  const onChange = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (name && room) {
      join({ name, room });
    }
  };

  return (
    <div id='join'>
      <h1>Welcome!</h1>
      <form onSubmit={onSubmit} className='form-sm'>
        <label htmlFor='name'>Enter name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='name'
        />
        <label htmlFor='room'>Enter room:</label>
        <input
          type='text'
          name='room'
          value={room}
          onChange={onChange}
          placeholder='room'
        />
        <Link onClick={onClick} to='/tic-tac-toe'>
          <input className='btn-primary' type='submit' value='Join' />
        </Link>
      </form>
    </div>
  );
};

export default connect(
  null,
  { join }
)(Join);
