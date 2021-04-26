import React from 'react';
import Review from './Review/Review';
import './TourReview.scss';

const TourReview = () => {
  return (
    <section className='tour-review'>
      <div className='review-wrapper'>
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
};

export default TourReview;
