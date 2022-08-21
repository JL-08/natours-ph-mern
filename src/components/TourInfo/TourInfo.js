import React from 'react';
import './TourInfo.scss';
import sample from '../../assets/images/swimming.jpg';

const TourInfo = () => {
  return (
    <article className='tour-info'>
      <div className='tour-stats'>
        <section className='tour-facts'>
          <h2>QUICK FACTS</h2>
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
            </ul>

            <ul className='facts-text'>
              <li>
                <h4>
                  NEXT DATE <span>June 2021</span>
                </h4>
              </li>
              <li>
                <h4>
                  DIFFICULTY <span>Medium</span>
                </h4>
              </li>
              <li>
                <h4>
                  PARTICIPANTS <span>15 People</span>
                </h4>
              </li>
              <li>
                <h4>
                  RATING <span>4.8/5</span>
                </h4>
              </li>
            </ul>
          </div>
        </section>

        <section className='tour-guides'>
          <h2>YOUR TOUR GUIDES</h2>
          <div className='guides-wrapper'>
            <ul>
              <li>
                <div className='tour-guide-avatar'>
                  <img src={sample} alt='sample avatar' />
                </div>
                <div className='tour-guide-info'>
                  <h4>LEAD GUIDE</h4>
                  <span>Jennifer Hardy</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className='tour-summary'>
        <h2>ABOUT BAGUIO RAILING FOREST</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          facilis, corrupti recusandae sequi, earum enim repudiandae quisquam
          deleniti minus nesciunt quia molestiae. Pariatur dicta minus, enim,
          tempore quam nihil error aliquid deleniti saepe est aspernatur numquam
          nobis necessitatibus fuga quas modi autem. Ut vel placeat dolorum
          vitae adipisci facilis repudiandae eaque, magnam inventore officiis
          similique modi quos odit ullam, laboriosam qui dolores, deleniti
          veritatis iure velit quasi esse? Perferendis consequuntur optio
          molestias omnis accusamus eveniet labore autem blanditiis, corrupti
          enim. Corrupti dolorem tempora mollitia magni omnis qui ipsa magnam,
          sapiente necessitatibus voluptatum tempore laudantium, ab porro, id
          soluta! Asperiores, aliquid?
        </p>
      </section>
    </article>
  );
};

export default TourInfo;
