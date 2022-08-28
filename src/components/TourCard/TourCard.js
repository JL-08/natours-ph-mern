import React from 'react';
import { Link } from 'react-router-dom';

import sample from '../../assets/images/biking.jpg';
import './TourCard.scss';

import moment from 'moment';

const Tour = ({ tour }) => {
  return (
    <div className='tour-card'>
      <figure className='card-header'>
        <img src={sample} alt='sample img' />
        <h2>
          <span>{tour.name.toUpperCase()}</span>
        </h2>
      </figure>
      <div className='card-details'>
        <div className='card-sub-heading'>
          <h4>
            {tour.difficulty} {tour.duration}-day tour
          </h4>
          <p>{tour.summary}</p>
        </div>
        <div className='card-info'>
          <i className='fas fa-map-marker-alt'>
            <span>{tour.mainLocation.name}</span>
          </i>
          <i className='fab fa-font-awesome-flag'>
            <span>{tour.locations.length} locations</span>
          </i>
          <i className='fas fa-calendar-alt'>
            <span>{moment(tour.startDates[0]).format('MMM YYYY')}</span>
          </i>
          <i className='fas fa-users'>
            <span>{tour.maxGroupSize} people</span>
          </i>
        </div>
      </div>
      <div className='card-footer'>
        <div className='tour-stats'>
          <h4>
            ₱{tour.price}
            <span> per person</span>
          </h4>
          <h4>
            {tour.ratingsAverage}
            <span> rating ({tour.ratingsQuantity})</span>
          </h4>
        </div>
        <div className='card-btn'>
          <Link to='/overview'>
            <button>DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tour;
