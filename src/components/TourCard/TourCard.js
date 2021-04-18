import React from 'react';
import sample from '../../images/biking.jpg';
import './TourCard.scss';

const Tour = () => {
  return (
    <div className='tour-card'>
      <div className='card-header'>
        <img src={sample} alt='sample img' />
        <h2>
          <span>BAGUIO RAILING FOREST</span>
        </h2>
      </div>
      <div className='card-details'>
        <div className='card-sub-heading'>
          <h4>Medium 7-day tour</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className='card-info'>
          <i class='fas fa-map-marker-alt'>
            <span>Baguio, PH</span>
          </i>
          <i class='fab fa-font-awesome-flag'>
            <span>4 locations</span>
          </i>
          <i class='fas fa-calendar-alt'>
            <span>May 2021</span>
          </i>
          <i class='fas fa-users'>
            <span>15 people</span>
          </i>
        </div>
      </div>
      <div className='card-footer'>
        <div className='tour-stats'>
          <h4>
            ₱2999<span> per person</span>
          </h4>
          <h4>
            4.8<span> rating (6)</span>
          </h4>
        </div>
        <div className='card-btn'>
          <button>DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
