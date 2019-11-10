import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-backg-pic'>
      <div className='navbar'>
        <h1 className='logo'>
          <i className='fas fa-dice'></i> GH Classics
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
