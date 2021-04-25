import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import './NavBar.scss';
import navLogo from '../../images/logo-white.png';
import sample from '../../images/swimming.jpg';
import { LOGOUT } from '../../constants/actionTypes';

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  // const location = useLocation();

  // useEffect(() => {
  //   const token = user?.token;

  //   if (token) {
  //     const decoded = decode(token);

  //     if (decoded.exp * 1000 < new Date().getTime()) handleLogout();
  //   }
  // }, [location]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });

    // history.push('/');

    setUser(null);
  };

  const UserNav = () => {
    if (user) {
      return (
        <>
          <div className='nav-profile'>
            <img src={sample} alt='' id='nav-avatar' />
            <h4>
              {user.firstName} {user.lastName}
            </h4>
          </div>
          <button onClick={handleLogout}>LOGOUT</button>
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
