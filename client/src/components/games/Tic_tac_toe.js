import React from 'react';
import { Link } from 'react-router-dom';

const Tic_tac_toe = () => {
  return (
    <div id='tic-tac-toe'>
      <div className='btn leave' style={{ padding: '0rem' }}>
        <Link
          to='/'
          className='leave'
          style={{ padding: '0.4rem 1.3rem', borderRadius: '10px' }}
        >
          Leave &nbsp;&nbsp;
          <i className='far fa-times-circle'></i>
        </Link>
      </div>
      <div className='game-space'>
        <div className='game-chat-layout'>
          <div className='tic-tac-toe-board'>
            <div className='box one'>1</div>
            <div className='box two'>2</div>
            <div className='box three'>3</div>
            <div className='box four'>4</div>
            <div className='box five'>5</div>
            <div className='box six'>6</div>
            <div className='box seven'>7</div>
            <div className='box eight'>8</div>
            <div className='box nine'>9</div>
          </div>
          <div className='chat-box'>
            <h1>Let's chat!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tic_tac_toe;
