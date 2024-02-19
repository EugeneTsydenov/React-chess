import { makeAutoObservable } from 'mobx';

class MatchmakingStore {
  isSearch = false;
  isConfirmed = false;
  isStartGame = false;
  isWaitingEnemy = false;
  roomId = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSearch(bool: boolean) {
    this.isSearch = bool;
  }

  setConfirmed(bool: boolean) {
    this.isConfirmed = bool;
  }

  setStartGame(bool: boolean) {
    this.isStartGame = bool;
  }

  setWaitingEnemy(bool: boolean) {
    this.isWaitingEnemy = bool;
  }

  setRoomId(roomId: string) {
    this.roomId = roomId;
  }

  public searchGame() {
    this.setSearch(true);
  }

  cancelSearch() {
    this.setSearch(false);
  }

  public confirmGame() {
    this.setSearch(false);
    this.setConfirmed(true);
  }

  public waitingEnemy() {
    this.setConfirmed(false);
    this.setWaitingEnemy(true);
  }

  public startGame(roomId: string) {
    this.setConfirmed(false);
    this.setWaitingEnemy(false);
    this.setStartGame(true);
    this.setRoomId(roomId);
  }
}

export const matchmakingStore = new MatchmakingStore();
