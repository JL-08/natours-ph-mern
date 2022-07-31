export const authRoutes = {
  REGISTER: '/users/register',
  LOGIN: '/users/login',
};

export const tourRoutes = {
  GET_UPCOMING_TOURS:
    '/tours/home/upcoming-tours?sort=startDates&limit=2&fields=name,startDates,summary,description,duration',
};
