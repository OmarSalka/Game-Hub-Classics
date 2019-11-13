import React from 'react';
import tic_tac_toe_image from '../../img/tic-tac-toe-MozJPEG.jpg';
// import dots_boxes_image from '../../img/dots-boxes.JPG';
import coming_soon from '../../img/soon1-1-MozJPEG.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='home' className='container homeFlex screenSize'>
      <h1 className='primary-header'>Welcome to GH Classics!</h1>
      <div className='games'>
        <div className='game-item'>
          <div className='img-hover-zoom'>
            <Link to='/join/t3'>
              <img src={tic_tac_toe_image} alt='Oops' />
            </Link>
          </div>
          <h2>Tic - Tac - Toe</h2>
        </div>
        <div className='game-item'>
          <div className='img-hover-zoom'>
            {/* <Link to='/dots-boxes'> */}
            <img src={coming_soon} alt='Oops' />
            {/* </Link> */}
          </div>
          <h2>Dots - {'&'} - Boxes</h2>
        </div>
        <div className='game-item'>
          <div className='img-hover-zoom'>
            {/* <Link to='/four-row'> */}
            <img src={coming_soon} alt='Oops' />
            {/* </Link> */}
          </div>
          <h2>4 - in - a - Row</h2>
        </div>
        <div className='game-item'>
          <div className='img-hover-zoom'>
            {/* <Link to='/chutes-ladders'> */}
            <img src={coming_soon} alt='Oops' />
            {/* </Link> */}
          </div>
          <h2>Chutes - {'&'} - Ladders</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
