import React from 'react';
import Tour from './Tour/Tour';
import './FeaturedTours.scss';

const FeaturedTours = () => {
  return (
    <article className='featured-tours'>
      <h1>FEATURED TOURS</h1>
      <section className='tours-container'>
        <Tour />
        <Tour />
        <Tour />
      </section>
    </article>
  );
};

export default FeaturedTours;
