import React from 'react';
import './Banner.scss';
import bannerBg from '../../images/banner-1.png';
import scroll from '../../images/scroll.svg';
import '../../sassStyles/_animations.scss';

const Banner = () => {
  return (
    <div className='banner'>
      <div style={{ background: `url(${bannerBg}) no-repeat fixed center` }} />
      <div className='overlay' />
      <div className='text-container'>
        <h1>
          Great Adventures
          <br /> Awaits You!
        </h1>
        <p>
          Be one with nature and experience the beauty it offers. There is a lot
          of adventures out there, waiting for us to relive them.
        </p>
        <div class='arrows'>
          <h3>DISCOVER THE PHILIPPINES</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
