import axios from 'axios';

export const contentAPI = axios.create({
  baseURL: 'http://13.124.245.2:3000',
  headers: {
    'Content-type': 'application/json',
  },
});
