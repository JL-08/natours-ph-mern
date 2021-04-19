import React from 'react';
import './Footer.scss';
import logoBlue from '../../images/logo-blue.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img id='footer-logo' src={logoBlue} alt='blue natours logo' />
      <nav className='footer-nav'>
        <ul>
          <li>Company</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Teams</li>
        </ul>
      </nav>
      <div className='footer-credits'>
        <p>© Janelle Lacsamana 2021.</p>
        <p>
          Inspired by Jonas Schmedtmann, instructor in Udemy and his course in
          Node.js, Express, MongoDB & more: The Complete Bootcamp.
        </p>
      </div>
    </div>
  );
};

export default Footer;
