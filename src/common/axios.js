// LIBRARY
import axios from 'axios';

// FUNCTION
import { getToken } from './token';

const instance = axios.create({
  baseURL: 'http://astelen.shop:3000/',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    Accept: '*/*',
    'X-Requested-With': 'XMLHttpRequest',
  },
  // timeout: 3000,
});

const token = getToken();

if (token) instance.defaults.headers.common['authorization'] = `Bearer ${token}`;

export default instance;
