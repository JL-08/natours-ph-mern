import React from 'react';
import { Link } from 'react-router-dom';

import sample from '../../../assets/images/sightseeing.jpg';
import { getClosestDate } from '../../../utils/dateHelper';

const Tour = ({ tour }) => {
  const startDate = getClosestDate(tour.startDates);

  return (
    <div className='card'>
      <figure className='card-img'>
        <img src={sample} alt='sample img' />
      </figure>
      <div className='card-header'>
        <div className='tour-details'>
          <span className='tour-date'>
            {startDate.format('MMM DD')} -
            {startDate.add(tour.duration, 'day').format('MMM DD')}
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
