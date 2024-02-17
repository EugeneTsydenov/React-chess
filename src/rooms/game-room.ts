import { AuthLocalStorageHelper } from '../helpers/authLocalStorageHelper.ts';
import { matchmakingStore } from '../store/matchmaking-store.ts';
import { Square } from 'react-chessboard/dist/chessboard/types';
import { IAvailableMoves } from '../models/IAvailableMoves.ts';
import { IStartGame } from '../models/IStartGame.ts';
import { IMovedData } from '../models/IMovedData.ts';
import { gameStore } from '../store/game-store.ts';
import { IMoveData } from '../models/IMoveData.ts';
import client from '../http/colyseus.ts';
import { Room } from 'colyseus.js';

class GameRoom {
  public room: Room | null = null;

  private getAccessToken() {
    const accessToken = AuthLocalStorageHelper.getAccessTokenFromLocalStorage();
    if (!accessToken) {
      throw new Error('Not Auth');
    }

    return accessToken;
  }

  public async findGame(mode: string) {
    try {
      const accessToken = this.getAccessToken();
      this.room = await client.joinOrCreate(mode, { mode, accessToken });
      if (this.room) {
        this.onMessage();
      }
    } catch (e) {
      console.log(e);
    }
  }

  private onMessage() {
    const room = this.room;
    if (room) {
      room.onMessage('start search game', () => {
        this.searchGame();
      });
      room.onMessage('confirm game', () => {
        this.confirmGame();
      });
      room.onMessage('waiting enemy', () => {
        this.waitingEnemy();
      });
      room.onMessage('start game', (payload: IStartGame) => {
        this.startGame(payload);
      });
      room.onMessage('moved', (gameData: IMovedData) => {
        this.moved(gameData);
      });
    }
  }

  private searchGame() {
    matchmakingStore.searchGame();
  }

  private confirmGame() {
    matchmakingStore.confirmGame();
  }

  public async cancelSearch() {
    if (this.room) {
      await this.room.leave(true);
      matchmakingStore.cancelSearch();
    }
  }

  public confirmedGame() {
    if (this.room) {
      this.room.send('user confirm game');
    }
  }

  private waitingEnemy() {
    matchmakingStore.waitingEnemy();
  }

  private startGame(payload: IStartGame) {
    if (this.room) {
      matchmakingStore.startGame(this.room.roomId);
      gameStore.startGame(payload);
    }
  }

  public move(moveData: IMoveData) {
    if (this.room) {
      this.room.send('move', {
        moveData,
      });
    }
  }

  moved(gameData: IMovedData) {
    gameStore.moved(gameData);
  }

  async getAvailableMoves(square: Square | null) {
    return new Promise<IAvailableMoves>((resolve) => {
      if (!this.room) {
        throw new Error('User is not in the room');
      }
      this.room.send('get moves', {
        square,
      });

      this.room.onMessage('available moves', (payload: IAvailableMoves) => {
        resolve({
          availableMoves: payload.availableMoves,
          color: payload.color,
          pieces: payload.pieces,
        });
      });
    });
  }
}

export const gameRoom = new GameRoom();
