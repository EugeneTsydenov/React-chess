import {makeAutoObservable} from "mobx";

export default class Store {
  user: object = {};
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean): void {
    this.isAuth = bool;
  }

  setUser(user: object): void {
    this.user = user;
  }

  async login (username: string, password: string):Promise<void> {
    try {
      this.setAuth(true);
      this.setUser({username, password})
    } catch (e) {
      console.log(e)
    }
  }
}