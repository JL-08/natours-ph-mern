import React from 'react';
import Activities from '../Activities/Activities';
import UpcomingTours from '../UpcomingTours/UpcomingTours';
import './TourIntro.scss';

const TourIntro = () => {
  return (
    <article className='tour-intro'>
      <div className='intro-bg'></div>
      <Activities />
      <UpcomingTours />
    </article>
  );
};

export default TourIntro;
