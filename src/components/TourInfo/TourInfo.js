import React from 'react';
import './TourInfo.scss';
import sample from '../../assets/images/swimming.jpg';
import { getClosestDate } from '../../utils/dateHelper';
import TourGuide from './TourGuide/TourGuide';

const TourInfo = ({ tour }) => {
  const startDate = getClosestDate(tour.startDates);
  console.log(tour);
  return (
    <article className='tour-info'>
      <div className='tour-stats'>
        <section className='tour-facts'>
          <h2>QUICK DETAILS</h2>
          <div className='facts-wrapper'>
            <ul className='facts-icon'>
              <li>
                <i className='fas fa-calendar'></i>
              </li>
              <li>
                <i className='fas fa-chart-line'></i>
              </li>
              <li>
                <i className='fas fa-users'></i>
              </li>
              <li>
                <i className='fas fa-star'></i>
              </li>
              <li>
                <i className='fas fa-map-marker'></i>
              </li>
            </ul>

            <ul className='facts-text'>
              <li>
                <h4>
                  NEXT DATE <span>{startDate.format('MMMM YYYY')}</span>
                </h4>
              </li>
              <li>
                <h4>
                  DIFFICULTY <span>{tour.difficulty}</span>
                </h4>
              </li>
              <li>
                <h4>
                  PARTICIPANTS <span>{tour.maxGroupSize} People</span>
                </h4>
              </li>
              <li>
                <h4>
                  RATING <span>{tour.ratingsAverage}/5</span>
                </h4>
              </li>
              <li>
                <h4>LOCATIONS </h4>
                <div className='col'>
                  {tour.locations.map((loc) => (
                    <div className='row'>
                      <span className='text-day'>day {loc.day}</span>
                      <h4> {loc.description} </h4>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className='tour-guides'>
          <h2>YOUR TOUR GUIDES</h2>
          {tour.guides.map((guide) => (
            <TourGuide key={guide._id} guide={guide} />
          ))}
        </section>
      </div>
      <section className='tour-summary'>
        <h2>ABOUT {tour.name.toUpperCase()}</h2>
        <p>{tour.description}</p>
      </section>
    </article>
  );
};

export default TourInfo;
