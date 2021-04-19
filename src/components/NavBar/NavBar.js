import React from 'react';
import './NavBar.scss';
import navLogo from '../../images/logo-white.png';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div>
        <img src={navLogo} alt='white natours logo' />
      </div>
      <div>
        <button>LOGIN</button>
        <button className='nav__btn-primary'>SIGNUP</button>
      </div>
    </nav>
  );
};

export default NavBar;
