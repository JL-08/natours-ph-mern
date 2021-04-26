import React from 'react';
import { Link } from 'react-router-dom';

import './Intro.scss';

const Intro = () => {
  return (
    <article className='intro'>
      <div className='text-container'>
        <h3>FIND YOUR PLACE IN NATURE</h3>
        <section className='text-wrapper'>
          <p>
            Wherever you want to go, whatever you want to get into, we’ve got a
            trip that’ll make your dream vacation come true. Visit like a local,
            explore at your own pace, and eat like a king.
          </p>
          <button className='btn-primary'>
            <Link to='/tours'>VIEW TOUR PACKAGES</Link>
          </button>
        </section>
      </div>
    </article>
  );
};

export default Intro;
