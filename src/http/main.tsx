import axios from 'axios';

export const BASE_API_URL = 'http://26.55.33.142:3008/api';

const $api = axios.create({
  withCredentials: false,
  baseURL: BASE_API_URL
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access-token')}`;
  return config;
})

export default $api;