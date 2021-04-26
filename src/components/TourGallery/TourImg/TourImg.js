import React from 'react';
import sample1 from '../../../images/sightseeing.jpg';
import sample2 from '../../../images/biking.jpg';
import sample3 from '../../../images/swimming.jpg';

const TourImg = () => {
  return (
    <figure className='tour-img'>
      <img src={sample1} alt='sample img' />
      <img src={sample2} alt='sample img' />
      <img src={sample3} alt='sample img' />
    </figure>
  );
};

export default TourImg;
