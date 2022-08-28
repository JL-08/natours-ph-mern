import React, { useEffect, useState } from 'react';
import Tour from '../TourCard/TourCard';
import './NearTours.scss';
import { getUserLocation } from '../../utils/geolocator';
import { getNearTours } from '../../api/ToursAPI';
import { statuses } from '../../constants/requestStatuses';

const NearTours = () => {
  const [location, setLocation] = useState();
  const [status, setStatus] = useState(statuses.IDLE);
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    setStatus(statuses.LOADING);
    let isRendered = true;

    const startFetch = async () => {
      if (!location) {
        const location = await fetchLocation();

        if (isRendered) {
          setLocation(location);
        }
      } else {
        const tours = await fetchTours();

        if (isRendered) {
          setTourList(tours);
          setStatus(statuses.SUCCESS);
        }
      }
    };

    startFetch();

    return () => {
      isRendered = false;
    };
  }, [location]);

  const fetchLocation = async () => {
    try {
      const location = await getUserLocation();
      return location;
    } catch (error) {
      setStatus(statuses.FAILED);
    }
  };

  const fetchTours = async () => {
    try {
      const response = await getNearTours(
        `${location.latitude}, ${location.longitude}/unit/km?limit=2`
      );

      return response.data;
    } catch (error) {
      setStatus(statuses.FAILED);
    }
  };

  return (
    <article className='near-tours'>
      <h1>AVAILABLE TOURS NEAR ME</h1>
      <section className='tours-container'>
        {status === statuses.SUCCESS &&
          tourList.data.map((tour) => <Tour key={tour._id} tour={tour} />)}
      </section>
    </article>
  );
};

export default NearTours;
