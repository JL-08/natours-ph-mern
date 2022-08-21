import React from 'react';
import './TourBooking.scss';
import logo from '../../assets/images/logo-white-sm.png';
import sample1 from '../../assets/images/sightseeing.jpg';
import sample2 from '../../assets/images/biking.jpg';

const TourBooking = () => {
  return (
    <div className='tour-booking'>
      <div className='booking-wrapper'>
        <figure className='booking-imgs'>
          <div className='logo-bg'>
            <img src={logo} alt='white natours logo' />
          </div>
          <img src={sample1} alt='white natours logo' />
          <img src={sample2} alt='white natours logo' />
        </figure>
        <div className='booking-text'>
          <h2>WHAT ARE YOU WAITING FOR?</h2>
          <h3>7 days, 1 adventure, infinite memories. Make it yours today!</h3>
        </div>
        <div className='booking-btn'>
          <button>LOG IN TO BOOK TOUR</button>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
