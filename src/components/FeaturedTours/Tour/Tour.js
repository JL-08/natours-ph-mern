import React from 'react';
import { Link } from 'react-router-dom';
import sample from '../../../assets/images/biking.jpg';

const Tour = () => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <figure className='card-img'>
            <img src={sample} alt='sample img' />
            <h2>
              <span>BAGUIO RAILING FOREST</span>
            </h2>
          </figure>
          <section className='card-details'>
            <h3>3 day tours</h3>
            <h3>Up to 20 people</h3>
            <h3>2 tour guides</h3>
            <h3>Difficulty: easy</h3>
          </section>
        </div>
        <div className='flip-card-back'>
          <div className='card-price'>
            <h4>Only</h4>
            <h2>₱1999</h2>
          </div>
          <div className='card-btn'>
            <Link to='/overview'>
              <button>BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
