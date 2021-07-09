import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 3000,
});

instance.defaults.headers.common['Authorization'] = 'TOKEN';

export default instance;
