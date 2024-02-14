import { makeAutoObservable } from 'mobx';

class GameStore {
  isSearch = false;
  isConfirmed = false;
  isStartGame = false;
  isWaitingEnemy = false;
  roomId = '';

  constructor() {
    makeAutoObservable(this)
  }

  setSearch(bool: boolean) {
    this.isSearch = bool
  }

  setConfirmed(bool: boolean) {
    this.isConfirmed = bool
  }

  setStartGame(bool: boolean) {
    this.isStartGame = bool;
  }

  setWaitingEnemy(bool: boolean) {
    this.isWaitingEnemy = bool
  }

  setRoomId(roomId: string) {
    this.roomId = roomId
  }
}

export const gameStore = new GameStore();