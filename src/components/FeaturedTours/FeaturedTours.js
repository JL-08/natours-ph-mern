import React from 'react';
import Tour from './Tour/Tour';
import './FeaturedTours.scss';
import { useFetch } from '../../hooks/useFetch';
import { getTours } from '../../api/ToursAPI';
import { statuses } from '../../constants/requestStatuses';

const FeaturedTours = () => {
  const { data: tourList, status } = useFetch(getTours, {
    isFeatured: true,
    limit: 3,
  });
  return (
    <article className='featured-tours'>
      <h1>FEATURED TOURS</h1>
      <section className='tours-container'>
        {status === statuses.SUCCESS &&
          tourList?.data.map((tour) => <Tour key={tour._id} tour={tour} />)}
      </section>
    </article>
  );
};

export default FeaturedTours;
