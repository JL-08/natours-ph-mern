import React from 'react';
import './Banner.scss';
import bannerBg from '../../images/banner-1.png';
import '../../sassStyles/_animations.scss';

const Banner = () => {
  return (
    <header className='banner'>
      <figure>
        <div
          style={{ background: `url(${bannerBg}) no-repeat fixed center` }}
        />
        <div className='overlay' />
      </figure>
      <section className='text-container'>
        <h1>
          Great Adventures
          <br /> Awaits You!
        </h1>
        <div className='text-wrapper'>
          <p>
            Be one with nature and experience the beauty it offers. There is a
            lot of adventures out there, waiting for us to relive them.
          </p>
        </div>
        <div className='arrows'>
          <h3>DISCOVER THE PHILIPPINES</h3>
        </div>
      </section>
    </header>
  );
};

export default Banner;
