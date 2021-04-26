import React from 'react';
import Tour from '../TourCard/TourCard';
import './BookingPage.scss';

const BookingPage = () => {
  return (
    <article className='booking-page'>
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
      <section className='tour-wrapper'>
        <Tour />
        <Tour />
        <Tour />
      </section>
    </article>
  );
};

export default BookingPage;
