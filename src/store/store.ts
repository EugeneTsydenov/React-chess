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
      console.log(response)
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
      console.log(response)
      this.setAuth(true);
      localStorage.setItem('accessToken', response.data.accessToken);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    const response = await AuthService.logout();
    this.setUser({} as IUser);
    this.setAuth(false);
    localStorage.removeItem('accessToken');
    console.log(response)
  }
}
