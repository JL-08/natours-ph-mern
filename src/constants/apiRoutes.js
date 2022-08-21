export const authRoutes = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  TOKEN: '/auth/token',
};

export const tourRoutes = {
  GET_UPCOMING_TOURS:
    '/tours/home/upcoming-tours?sort=startDates&limit=2&fields=name,startDates,summary,description,duration',
};
