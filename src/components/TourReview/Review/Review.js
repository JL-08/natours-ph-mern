import React from 'react';
import sample from '../../../assets/images/biking.jpg';

// const ReviewStar = ({ rating }) => {
//   const stars = [];

//   return stars;
// };

const Review = ({ review }) => {
  const stars = [];

  console.log('rating', review.rating);
  for (let i = review.rating; i >= 0.5; i--) {
    let star = null;
    if (i === 0.5) {
      star = <i className='fas fa-star-half-alt'></i>;
    } else {
      star = <i className='fas fa-star'></i>;
    }

    console.log('i:', i);
    stars.push(<span>{star}</span>);
  }

  return (
    <div className='review-card'>
      <div className='review-user'>
        <img src={sample} alt='sample' />
        <h2>
          {review.user.firstName.toUpperCase()}{' '}
          {review.user.lastName.toUpperCase()}
        </h2>
      </div>
      <div className='review-text'>
        <p>{review.review}</p>
      </div>
      <div className='review-rating'>{stars}</div>
      {/* <ReviewStar rating={review.rating} /> */}
    </div>
  );
};

export default Review;
