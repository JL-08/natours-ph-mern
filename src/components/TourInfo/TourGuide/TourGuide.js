import React from 'react';
import sample from '../../../assets/images/swimming.jpg';
import { roles } from '../../../constants/userRoles';

const TourGuide = ({ guide }) => {
  return (
    <div className='guides-wrapper'>
      <ul>
        <li>
          <div className='tour-guide-avatar'>
            <img src={sample} alt='sample avatar' />
          </div>
          <div className='tour-guide-info'>
            <h4>{guide.role === roles.leadGuide ? 'LEAD GUIDE' : 'GUIDE'}</h4>
            <span>
              {guide.firstName} {guide.lastName}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TourGuide;
