import React, { useState } from 'react';
import './NavBar.scss';
import navLogo from '../../images/logo-white.png';
import sample from '../../images/swimming.jpg';

const NavBar = () => {
  const [user, setUser] = useState({ fname: 'John', lname: 'Smith' });

  const UserNav = () => {
    if (user) {
      return (
        <>
          <div className='nav-profile'>
            <img src={sample} alt='' id='nav-avatar' />
            <h4>
              {user.fname} {user.lname}
            </h4>
          </div>
          <button>LOGOUT</button>
        </>
      );
    }

    return (
      <>
        <button>LOGIN</button>
        <button className='nav__btn-primary'>SIGNUP</button>
      </>
    );
  };

  return (
    <nav className='nav-bar'>
      <div>
        <img src={navLogo} alt='white natours logo' />
      </div>
      <div>
        <UserNav />
      </div>
    </nav>
  );
};

export default NavBar;
