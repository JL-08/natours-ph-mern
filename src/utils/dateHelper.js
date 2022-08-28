import moment from 'moment';

export const getClosestDate = (dates) => {
  const sortedDates = dates.sort(
    (current, next) => moment(current) - moment(next)
  );

  const afterdates = sortedDates.filter((d) => {
    return moment(d).diff(moment()) > 0;
  });

  return moment(afterdates[0]);
};
