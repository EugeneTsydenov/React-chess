import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse.ts";

export const BASE_API_URL: string = 'http://localhost:52718/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
  timeout: 1500
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
})

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${BASE_API_URL}/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem('token', response.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axios(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  }
);


export default $api;