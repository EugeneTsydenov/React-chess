import { Square } from 'react-chessboard/dist/chessboard/types';
import { IEnemy, IStartGame } from '../models/IStartGame.ts';
import { IMovedData } from '../models/IMovedData.ts';
import { makeAutoObservable } from 'mobx';
import { ITime } from '../models/IMode.ts';

class GameStore {
  move: string | null | undefined;
  enemy: IEnemy | null = null;
  gameFen: string = '';
  userColor: 'w' | 'b' | '' = '';
  turn: 'w' | 'b' | '' = '';
  isCheck: boolean = false;
  kingSquareIsInCheck: Square | '' = '';
  isGameOver: boolean = false;
  whiteTime: number | null = null
  blackTime: number | null = null
  timer: NodeJS.Timeout | null = null
  increment: number = 0
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

  setTimerId(id: NodeJS.Timeout) {
    this.timer = id
  }

  changeTime() {
    if(this.turn === 'w') {
      if(this.whiteTime) {
        this.whiteTime -= 1;
      }
    } else {
      if(this.blackTime) {
        this.blackTime -= 1
      }
    }
  }

  setTime(time: ITime) {
    this.increment = time.increment;
    this.whiteTime = time.totalTime;
    this.blackTime = time.totalTime
  }

  public startGame(payload: IStartGame) {
    this.setEnemy(payload.enemy);
    this.setGameFen(payload.gameFen);
    this.setUserColor(payload.playerColor);
    this.setTurn(payload.turn);
    this.startTimer()
  }

  startTimer() {
    const timerId = setInterval(() => {
      this.changeTime()
    }, 1000)

    this.setTimerId(timerId)
  }

  incrementTimer() {
    if(this.turn === 'w') {
      if(this.blackTime) {
        this.blackTime += this.increment
      }
    }
    if(this.turn === 'b') {
      if(this.whiteTime) {
        this.whiteTime += this.increment
      }
    }
  }

  moved(gameData: IMovedData) {
    this.setGameFen(gameData.fen);
    this.setTurn(gameData.turn);
    this.setCheck(gameData.isCheck);
    this.setKingSquareIsInCheck(gameData.kingSquareIsInCheck);
    this.setMove(gameData.move);
    this.incrementTimer()
    this.setGameOver(gameData.isGameOver)
  }
}

export const gameStore = new GameStore();
