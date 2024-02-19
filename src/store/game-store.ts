import { Square } from 'react-chessboard/dist/chessboard/types';
import { IEnemy, IStartGame } from '../models/IStartGame.ts';
import { IMovedData } from '../models/IMovedData.ts';
import { makeAutoObservable } from 'mobx';

class GameStore {
  move: string | null | undefined;
  enemy: IEnemy | null = null;
  gameFen: string = '';
  userColor: 'w' | 'b' | '' = '';
  turn: 'w' | 'b' | '' = '';
  isCheck: boolean = false;
  kingSquareIsInCheck: Square | '' = '';
  isGameOver: boolean = false
  constructor() {
    makeAutoObservable(this);
  }

  setEnemy(enemy: IEnemy) {
    this.enemy = enemy;
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

  setGameOver(bool: boolean) {
    this.isGameOver = bool
  }
  setKingSquareIsInCheck(kingSquare: Square | '') {
    this.kingSquareIsInCheck = kingSquare;
  }

  setMove(move: string | null) {
    this.move = move;
  }

  public startGame(payload: IStartGame) {
    this.setEnemy(payload.enemy);
    this.setGameFen(payload.gameFen);
    this.setUserColor(payload.playerColor);
    this.setTurn(payload.turn);
  }

  moved(gameData: IMovedData) {
    this.setGameFen(gameData.fen);
    this.setTurn(gameData.turn);
    this.setCheck(gameData.isCheck);
    this.setKingSquareIsInCheck(gameData.kingSquareIsInCheck);
    this.setMove(gameData.move);
    this.setGameOver(gameData.isGameOver)
  }
}

export const gameStore = new GameStore();
