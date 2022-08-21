import React from 'react';
import sample from '../../../assets/images/biking.jpg';

const Review = () => {
  return (
    <div className='review-card'>
      <div className='review-user'>
        <img src={sample} alt='sample' />
        <h2>LOURDES BROWNING</h2>
      </div>
      <div className='review-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim ea
          numquam, placeat quia nulla asperiores labore libero. Quam ducimus
          earum vero, vel incidunt cupiditate unde nam commodi cumque ex, optio
          iure ratione reprehenderit. Repellat, modi doloremque asperiores
          tempore rerum quod dolorum inventore vitae est quis porro eum odio
          dignissimos?
        </p>
      </div>
      <div className='review-rating'>
        <span>
          <i className='fas fa-star'></i>
        </span>
        <span>
          <i className='fas fa-star'></i>
        </span>
        <span>
          <i className='fas fa-star'></i>
        </span>
        <span>
          <i className='fas fa-star-half-alt'></i>
        </span>
        <span>
          <i className='far fa-star'></i>
        </span>
      </div>
    </div>
  );
};

export default Review;
