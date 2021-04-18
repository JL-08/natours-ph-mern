import React from 'react';
import sample from '../../images/biking.jpg';

const Tour = () => {
  return (
    <div className='tour-card'>
      <div className='card-header'>
        <img src={sample} alt='sample img' />
        <h2>BAGUIO RAILING FOREST</h2>
      </div>
      <div className='card-details'>
        <div className='card-sub-heading'>
          <h4>Medium 7-day tour</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            amet totam repudiandae ipsam quos voluptate quasi maxime porro illum
            iure.
          </p>
        </div>
        <div className='card-info'>
          <i class='fas fa-map-marker-alt'>Baguio, PH</i>
          <i class='fab fa-font-awesome-flag'>4 locations</i>
          <i class='fas fa-calendar-alt'>May 2021</i>
          <i class='fas fa-users'>15 people</i>
        </div>
      </div>
      <div className='card-footer'>
        <div className='tour-stats'>
          <h4>
            ₱2999<span>per person</span>
          </h4>
          <h4>
            4.8<span>rating (6)</span>
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
