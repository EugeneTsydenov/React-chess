import { AuthResponse } from '../models/response/AuthResponse.ts';
import AuthService from '../services/AuthService.ts';
import { IUser } from '../models/IUser.ts';
import { makeAutoObservable } from 'mobx';
import { AxiosResponse } from 'axios';

export default class Store {
  user = {} as IUser;
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean): void {
    this.isAuth = bool;
  }

  setUser(user: IUser): void {
    this.user = user;
  }

  async login(email: string, password: string): Promise<void> {
    console.log(email, password);
    try {
      const response: AxiosResponse<AuthResponse> = await AuthService.login(email, password);
      localStorage.setItem('accessToken', response.data.accessToken);
      await this.getUser();
    } catch (e) {
      console.log(e);
    }
  }

  async registration(email: string, username: string, password: string) {
    try {
      const response = await AuthService.registration(email, username, password);
      await this.getUser();
      localStorage.setItem('accessToken', response.data.accessToken);
      this.setAuth(true);
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    try {
      const response = await AuthService.refresh();
      console.log(response.data.accessToken);
      await this.getUser();
      this.setAuth(true);
      localStorage.setItem('accessToken', response.data.accessToken);
    } catch (e) {
      this.setAuth(false);
      this.setUser({} as IUser);
      localStorage.removeItem('accessToken');
    }
  }

  async logout() {
    const response = await AuthService.logout();
    this.setUser({} as IUser);
    this.setAuth(false);
    localStorage.removeItem('accessToken');
    return response;
  }

  async getUser() {
    try {
      const response = await AuthService.getUser();
      const user = response.data;
      this.setUser(user);
      console.log(user);
      this.setAuth(user.isAuth);
    } catch (e) {
      console.log(e);
    }
  }
}
