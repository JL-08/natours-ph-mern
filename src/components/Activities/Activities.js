import React from 'react';
import './Activities.scss';
import bikingImg from '../../images/biking.jpg';
import swimmingImg from '../../images/swimming.jpg';
import hikingImg from '../../images/hiking.jpg';
import sightseeingImg from '../../images/sightseeing.jpg';

const Activities = () => {
  return (
    <div className='activities'>
      <div className='grid-container'>
        <div className='item-1'>
          <img src={bikingImg} alt='biking' />
          <div>
            <span>01</span>
            <h2>BIKING</h2>
            <i class='fas fa-arrow-right'></i>
          </div>
        </div>
        <div className='item-2'>
          <img src={swimmingImg} alt='swimming' />
          <div>
            <span>02</span>
            <h2>SWIMMING</h2>
            <i class='fas fa-arrow-right'></i>
          </div>
        </div>
        <div className='item-3'>
          <img src={hikingImg} alt='hiking' />
          <div>
            <span>03</span>
            <h2>HIKING</h2>
            <i class='fas fa-arrow-right'></i>
          </div>
        </div>
        <div className='item-4'>
          <img src={sightseeingImg} alt='sighseeing' />
          <div>
            <span>04</span>
            <h2>SIGHTSEEING</h2>
            <i class='fas fa-arrow-right'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
