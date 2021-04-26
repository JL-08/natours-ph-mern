import React from 'react';
import Tour from './Tour/Tour';
import './UpcomingTours.scss';

const UpcomingTours = () => {
  return (
    <article className='upcoming-tours'>
      <h1>UPCOMING TOURS</h1>
      <section className='tour-container'>
        <Tour />
        <Tour />
      </section>
    </article>
  );
};

export default UpcomingTours;
