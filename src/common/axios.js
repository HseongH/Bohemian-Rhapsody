import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://astelen.shop:3000/',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'Accept': '*/*',
    'X-Requested-With': 'XMLHttpRequest',
    // 'content-type': '',
  },
  // timeout: 3000,
});

const TOKEN = localStorage.getItem('token');

if (TOKEN) instance.defaults.headers.common['Authorization'] = TOKEN;

export default instance;
