import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService.ts";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse.ts";
import {IUser} from "../models/IUser.ts";

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

  async login (email: string, password: string):Promise<void> {
    try {
      const response:AxiosResponse<AuthResponse> = await AuthService.login(email, password);
      await this.getUser()
      this.setAuth(true);
      this.setUser({username: 'dsfds'})
      localStorage.setItem('accessToken', response.data.accessToken);
    } catch (e) {
      console.log(e)
    }
  }

  async registration(email:string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      await this.getUser()
      localStorage.setItem('accessToken', response.data.accessToken);
      this.setAuth(true);
      this.setUser({username: 'dsfds'});
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    try {
      const response = await AuthService.refresh();
      console.log(response.data.accessToken)
      await this.getUser();
      this.setAuth(true);
      localStorage.setItem('accessToken', response.data.accessToken);
    } catch (e) {
      this.setAuth(false);
      this.setUser({} as IUser)
      localStorage.removeItem('accessToken');
    }
  }

  async logout() {
    const response = await AuthService.logout();
    this.setUser({} as IUser);
    this.setAuth(false);
    localStorage.removeItem('accessToken');
  }

  async getUser() {
    try {
      const response = await AuthService.getUser();
      const user = response.data;
      this.setUser(user);
      this.setAuth(response.data.isAuth);
    } catch (e) {
      console.log(e)
    }
  }
}
