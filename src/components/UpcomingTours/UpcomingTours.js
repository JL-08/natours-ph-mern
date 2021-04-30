import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tour from './Tour/Tour';
import './UpcomingTours.scss';

import { getUpcomingTours } from '../../actions/tourActions';

const UpcomingTours = () => {
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tour);

  useEffect(() => {
    dispatch(getUpcomingTours());
  }, []);

  useEffect(() => {
    console.log(tour?.tourData?.upcoming?.data);
    // if (tour) {
    //   Object.entries(tour.tourData.upcoming.data).map((tour, key) => {
    //     console.log(tour);
    //   });
    // }
  }, [tour]);

  return (
    <article className='upcoming-tours'>
      <h1>UPCOMING TOURS</h1>
      <section className='tour-container'>
        {tour?.tourData?.upcoming &&
          Object.entries(tour.tourData.upcoming.data).map((tour, key) => (
            <Tour key={key} tour={tour[1]} />
          ))}
      </section>
    </article>
  );
};

export default UpcomingTours;
