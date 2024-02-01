import { AuthResponse } from '../models/response/AuthResponse.ts';
import $api, { BASE_API_URL } from '../http/main.ts';
import axios, { AxiosResponse } from 'axios';
import { IUser } from '../models/IUser.ts';

interface IToken {
  accessToken: string;
  message: string;
  status: string;
}

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<IToken>('/login', { email, password });
  }

  static async registration(
    email: string,
    username: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/registration', { email, username, password });
  }
  static async refresh() {
    console.log('refresh');
    return axios.get(`${BASE_API_URL}/refresh`, { withCredentials: true });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }

  static async getUser(): Promise<AxiosResponse> {
    console.log('useer');
    return $api.get<IUser>('/user');
  }
}
