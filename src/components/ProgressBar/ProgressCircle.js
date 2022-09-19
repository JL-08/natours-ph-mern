import React from 'react';
import loadingCircle from '../../assets/animations/loadingCircle.svg';
import './ProgressCircle.scss';

const ProgressCircle = ({ isPageLoad }) => {
  var cssClass = isPageLoad ? 'loadingCircle-page' : 'loadingCircle-component';

  return <img className={cssClass} src={loadingCircle} alt='Loading' />;
};

export default ProgressCircle;
