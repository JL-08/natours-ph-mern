import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem('profile')).token
//     }`;
//   }

//   return req;
// });

export const register = (formData) => API.post('/users/register', formData);
