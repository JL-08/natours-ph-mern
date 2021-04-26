import React from 'react';
import { Link } from 'react-router-dom';

import sample from '../../../images/sightseeing.jpg';

const Tour = () => {
  return (
    <div className='card'>
      <figure className='card-img'>
        <img src={sample} alt='sample img' />
      </figure>
      <div className='card-header'>
        <div className='tour-details'>
          <span className='tour-date'>02/21 - 02/25</span>
          <h3>BAGUIO RAILING FOREST</h3>
        </div>
      </div>
      <div className='card-bottom-header'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa
          nam ducimus reiciendis. Dolor officia velit tenetur mollitia debitis?
          Quae cum fugit dolor ab nemo corporis. Est ullam in delectus.
        </p>
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
