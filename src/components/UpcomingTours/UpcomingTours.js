import React from 'react';
import Tour from './Tour/Tour';
import './UpcomingTours.scss';

const UpcomingTours = () => {
  return (
    <article className='upcoming-tours'>
      <h1>UPCOMING TOURS</h1>
      <section className='tour-container'>
        <Tour
          key={'uptour0'}
          tour={{
            startDates: ['05 October 2011 14:48 UTC'],
            duration: 5,
            name: 'test',
            summary: 'tara na',
          }}
        />
      </section>
    </article>
  );
};

export default UpcomingTours;
