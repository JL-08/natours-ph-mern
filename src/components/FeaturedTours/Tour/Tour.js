import React from 'react';
import sample from '../../../images/biking.jpg';

const Tour = () => {
  return (
    <div class='flip-card'>
      <div class='flip-card-inner'>
        <div class='flip-card-front'>
          <div className='card-img'>
            <img src={sample} alt='sample img' />
            <h2>
              <span>BAGUIO RAILING FOREST</span>
            </h2>
          </div>
          <div className='card-details'>
            <h3>3 day tours</h3>
            <h3>Up to 20 people</h3>
            <h3>2 tour guides</h3>
            <h3>Difficulty: easy</h3>
          </div>
        </div>
        <div class='flip-card-back'>
          <div className='card-price'>
            <h4>Only</h4>
            <h2>₱1999</h2>
          </div>
          <div className='card-btn'>
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
