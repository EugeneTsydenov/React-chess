import { makeAutoObservable } from 'mobx';
import { IResultGameData } from '../models/IResultGameData.ts';

class ResultGameStore {
  status: string = '';
  message: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  setStatus(status: string) {
    this.status = status
  }

  setMessage(message: string) {
    this.message = message
  }

  gameOver(resultGameData: IResultGameData) {
    this.setMessage(resultGameData.message);
    this.setStatus(resultGameData.status)
  }
}

export const resultGameStore = new ResultGameStore();