import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './NavBar.scss';
import navLogo from '../../assets/images/logo-white.png';
import sample from '../../assets/images/swimming.jpg';
import { authContext } from '../../context/auth-context';
import { AUTH } from '../../constants/pageRoutes';

const NavBar = () => {
  const { user, setUser } = useContext(authContext);
  const history = useHistory();

  const handleLogout = () => {
    // TODO: revoke tokens
    history.push('/');
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
        <Link to={`${AUTH}/login`}>
          <button>LOGIN</button>
        </Link>
        <Link to={`${AUTH}/register`}>
          <button className='nav__btn-primary'>SIGNUP</button>
        </Link>
      </>
    );
  };

  return (
    <header className='nav-bar'>
      <figure>
        <Link to='/'>
          <img src={navLogo} alt='white natours logo' />
        </Link>
      </figure>
      <nav>
        <UserNav />
      </nav>
    </header>
  );
};

export default NavBar;
