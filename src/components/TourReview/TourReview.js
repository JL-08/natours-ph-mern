import React from 'react';
import Review from './Review/Review';
import './TourReview.scss';

const TourReview = ({ reviews }) => {
  return (
    <section className='tour-review'>
      <div className='review-wrapper'>
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default TourReview;
