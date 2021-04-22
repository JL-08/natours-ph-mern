import React from 'react';
import Tour from '../TourCard/TourCard';
import './BookingPage.scss';

const BookingPage = () => {
  return (
    <div className='booking-page'>
      <h1>BOOK TOURS</h1>
      <div className='sort-toolbar'>
        <label for='sort'>Sort By:</label>

        <select name='sort'>
          <option value='name'>Name</option>
          <option value='difficulty'>Difficulty</option>
          <option value='duration'>Duration</option>
          <option value='date'>Date</option>
          <option value='price'>Price</option>
          <option value='rating'>Rating</option>
        </select>
      </div>
      <div className='tour-wrapper'>
        <Tour />
        <Tour />
        <Tour />
      </div>
    </div>
  );
};

export default BookingPage;
