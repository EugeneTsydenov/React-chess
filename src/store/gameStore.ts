import { makeAutoObservable } from 'mobx';
import { Square } from 'react-chessboard/dist/chessboard/types';

class GameStore {
  isSearch = false;
  isConfirmed = false;
  isStartGame = false;
  isWaitingEnemy = false;
  roomId = '';
  enemyId: number | null = null;
  gameFen: string = '';
  userColor: 'w' | 'b' | '' = '';
  turn: 'w' | 'b' | '' = '';
  isCheck: boolean = false;
  isCheckmate: boolean = false;
  isGameOver: boolean = false;
  kingSquareInCheck: Square | null = null
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

  setEnemyId(enemyId: number) {
    this.enemyId = enemyId
  }

  setGameFen(gameFen: string) {
    this.gameFen = gameFen
  }

  setUserColor(userColor: 'w' | 'b' | '') {
    this.userColor = userColor
  }

  setTurn(turn: 'w' | 'b' | '') {
    this.turn = turn
  }

  setCheck(bool: boolean) {
    this.isCheck = bool
  }

  setCheckmate(bool: boolean) {
    this.isCheckmate = bool
  }

  setGameOver(bool: boolean) {
    this.isGameOver = bool
  }

  setKingSquareInCheck(square: Square | null) {
    this.kingSquareInCheck = square
  }
}

export const gameStore = new GameStore();