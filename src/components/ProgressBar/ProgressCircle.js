import React from 'react';
import loadingCircle from '../../assets/animations/loadingCircle.svg';
import './ProgressCircle.scss';

const ProgressCircle = () => {
  return <img class='loadingCircle' src={loadingCircle} alt='Loading' />;
};

export default ProgressCircle;
