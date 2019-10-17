import React from 'react';
import tic_tac_toe_image from '../../img/tic-tac-toe.jpg';
import dots_boxes_image from '../../img/dots-boxes.JPG';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='home' className='container homeFlex screenSize'>
      <h1>Play, chat, or do both!</h1>
      <div className='games'>
        <div>
          <Link to='/tic-tac-toe'>
            <div className='img-hover-zoom'>
              <img src={tic_tac_toe_image} alt='Oops' />
            </div>
          </Link>
          <h2>Tic - Tac - Toe</h2>
        </div>
        <div>
          <Link to='/dots-boxes'>
            <div className='img-hover-zoom'>
              <img src={dots_boxes_image} alt='Oops' />
            </div>
          </Link>
          <h2>Dots - {'&'} - Boxes</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
