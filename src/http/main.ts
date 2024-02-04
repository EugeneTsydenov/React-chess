import { AuthResponse } from '../models/response/AuthResponse.ts';
import axios from 'axios';

export const BASE_API_URL: string = 'http://localhost:52718/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
  timeout: 10000,
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        await axios.get<AuthResponse>(`${BASE_API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('isAuth', 'true');
        return axios(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  },
);

export default $api;
