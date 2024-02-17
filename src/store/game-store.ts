import { IStartGame } from '../models/IStartGame.ts';
import { IMovedData } from '../models/IMovedData.ts';
import { makeAutoObservable } from 'mobx';
import { Square } from 'react-chessboard/dist/chessboard/types';

class GameStore {
  enemyId: number | null = null;
  gameFen: string = '';
  userColor: 'w' | 'b' | '' = '';
  turn: 'w' | 'b' | '' = '';
  isCheck: boolean = false;
  isCheckmate: boolean = false;
  isGameOver: boolean = false;
  kingSquareIsInCheck: Square | '' = ''
  constructor() {
    makeAutoObservable(this);
  }

  setEnemyId(enemyId: number) {
    this.enemyId = enemyId;
  }

  setGameFen(gameFen: string) {
    this.gameFen = gameFen;
  }

  setUserColor(userColor: 'w' | 'b' | '') {
    this.userColor = userColor;
  }

  setTurn(turn: 'w' | 'b' | '') {
    this.turn = turn;
  }

  setCheck(bool: boolean) {
    this.isCheck = bool;
  }

  setCheckmate(bool: boolean) {
    this.isCheckmate = bool;
  }

  setGameOver(bool: boolean) {
    this.isGameOver = bool;
  }

  setKingSquareIsInCheck(kingSquare: Square | '') {
    this.kingSquareIsInCheck = kingSquare
  }

  public startGame(payload: IStartGame) {
    this.setEnemyId(payload.enemy);
    this.setGameFen(payload.gameFen);
    this.setUserColor(payload.playerColor);
    this.setTurn(payload.turn);
  }

  moved(gameData: IMovedData) {
    this.setGameFen(gameData.fen);
    this.setTurn(gameData.turn);
    this.setCheck(gameData.isCheck);
    this.setCheckmate(gameData.isCheckmate);
    this.setGameOver(gameData.isGameOver);
    this.setKingSquareIsInCheck(gameData.kingSquareIsInCheck)
  }
}

export const gameStore = new GameStore();
