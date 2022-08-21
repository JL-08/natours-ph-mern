import React from 'react';
import { Link } from 'react-router-dom';
import './Activities.scss';
import bikingImg from '../../assets/images/biking.jpg';
import swimmingImg from '../../assets/images/swimming.jpg';
import hikingImg from '../../assets/images/hiking.jpg';
import sightseeingImg from '../../assets/images/sightseeing.jpg';

const Activities = () => {
  return (
    <section className='activities'>
      <figure className='grid-container'>
        <div className='item-1'>
          <Link to='/tours'>
            <img src={bikingImg} alt='biking' />
            <div className='hover-desc'>
              <span>01</span>
              <h2>BIKING</h2>
              <i className='fas fa-arrow-right'></i>
            </div>
          </Link>
        </div>
        <div className='item-2'>
          <Link to='/tours'>
            <img src={swimmingImg} alt='swimming' />
            <div className='hover-desc'>
              <span>02</span>
              <h2>SWIMMING</h2>
              <i className='fas fa-arrow-right'></i>
            </div>
          </Link>
        </div>
        <div className='item-3'>
          <Link to='/tours'>
            <img src={hikingImg} alt='hiking' />
            <div className='hover-desc'>
              <span>03</span>
              <h2>HIKING</h2>
              <i className='fas fa-arrow-right'></i>
            </div>
          </Link>
        </div>
        <div className='item-4'>
          <Link to='/tours'>
            <img src={sightseeingImg} alt='sighseeing' />
            <div className='hover-desc'>
              <span>04</span>
              <h2>SIGHTSEEING</h2>
              <i className='fas fa-arrow-right'></i>
            </div>
          </Link>
        </div>
      </figure>
    </section>
  );
};

export default Activities;
