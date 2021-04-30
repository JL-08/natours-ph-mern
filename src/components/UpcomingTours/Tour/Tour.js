import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import sample from '../../../images/sightseeing.jpg';

const Tour = ({ tour }) => {
  console.log('tour', tour);
  return (
    <div className='card'>
      <figure className='card-img'>
        <img src={sample} alt='sample img' />
      </figure>
      <div className='card-header'>
        <div className='tour-details'>
          <span className='tour-date'>
            {moment(tour.startDates[0]).format('M/d')}
          </span>
          <h3>{tour.name}</h3>
        </div>
      </div>
      <div className='card-bottom-header'>
        <p>{tour.description}</p>
      </div>
      <div className='card-arrow'>
        <Link to='/overview'>
          <i className='fas fa-arrow-circle-right'>
            <span> Learn More</span>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Tour;
