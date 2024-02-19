import { makeAutoObservable } from 'mobx';

class AuthStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean): void {
    this.isAuth = bool;
  }
}

export const authStore = new AuthStore();
