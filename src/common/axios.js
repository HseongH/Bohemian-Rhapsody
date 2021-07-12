import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://astelen.shop:3000/',
  // headers: { 'Access-Control-Allow-Origin': '*' },
  timeout: 3000,
});

// 헤더에 토큰을 실어서 보낼 때 동적으로 추가
// instance.defaults.headers.common['Authorization'] = 'TOKEN';

export default instance;
