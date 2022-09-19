import React from 'react';
import { useParams } from 'react-router-dom';
import TourBanner from '../../components/TourBanner/TourBanner';
import TourGallery from '../../components/TourGallery/TourGallery';
import TourInfo from '../../components/TourInfo/TourInfo';
import TourReview from '../../components/TourReview/TourReview';
import TourBooking from '../../components/TourBooking/TourBooking';
import { useFetch } from '../../hooks/useFetch';
import { getReviews } from '../../api/ReviewsAPI';
import { getTour } from '../../api/ToursAPI';
import { statuses } from '../../constants/requestStatuses';
import ProgressCircle from '../../components/ProgressBar/ProgressCircle';

const TourPage = () => {
  const { id } = useParams();
  const { data: tourData, status: tourStatus } = useFetch(getTour, {}, { id });
  const { data: reviewData, status: reviewStatus } = useFetch(getReviews, {
    tour: id,
  });

  return (
    <>
      {tourStatus === statuses.LOADING && <ProgressCircle isPageLoad={true} />}
      {tourStatus === statuses.SUCCESS && reviewStatus === statuses.SUCCESS && (
        <>
          <TourBanner tour={tourData.data} />
          <TourInfo tour={tourData.data} />
          <TourGallery tour={tourData.data} />
          <TourReview reviews={reviewData.data} />
          <TourBooking tour={tourData.data} />
        </>
      )}
    </>
  );
};

export default TourPage;
