import React from 'react';
import { getUpcomingTours } from '../../api/ToursAPI';
import Tour from './Tour/Tour';
import './UpcomingTours.scss';
import { useFetch } from '../../hooks/useFetch';
import { statuses } from '../../constants/requestStatuses';

const UpcomingTours = () => {
  const { data: tourList, status } = useFetch(
    getUpcomingTours,
    '?sort=startDates&limit=2&fields=name,startDates,summary,description,duration'
  );

  return (
    <article className='upcoming-tours'>
      <div>
        <h1>UPCOMING TOURS</h1>
      </div>
      <section className='tour-container'>
        {status === statuses.SUCCESS &&
          tourList.data.map((tour) => <Tour key={tour.id} tour={tour} />)}
        {console.log(tourList)}
      </section>
    </article>
  );
};

export default UpcomingTours;
