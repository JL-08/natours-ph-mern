import React from 'react';
import { Link } from 'react-router-dom';
import sample from '../../../assets/images/biking.jpg';
import { OVERVIEW } from '../../../constants/pageRoutes';

const Tour = ({ tour }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <figure className='card-img'>
            <img src={sample} alt='sample img' />
            <h2>
              <span>{tour.name?.toUpperCase()}</span>
            </h2>
          </figure>
          <section className='card-details'>
            <h3>{tour.duration} day tours</h3>
            <h3>Up to {tour.maxGroupSize} people</h3>
            <h3>{tour.guides.length} tour guides</h3>
            <h3>Difficulty: {tour.difficulty}</h3>
          </section>
        </div>
        <div className='flip-card-back'>
          <div className='card-price'>
            <h4>Only</h4>
            <h2>₱{tour.price}</h2>
          </div>
          <div className='card-btn'>
            <Link to={`${OVERVIEW}/${tour._id}`}>
              <button>BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
