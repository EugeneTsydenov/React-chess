import { authLocalStorageHelper } from './authLocalStorageHelper.ts';
import client from '../http/colyseus.ts';
import { Room } from 'colyseus.js';
import { gameStore } from '../store/gameStore.ts';
import { gameLocalStorageHelper } from './gameLocalStorageHelper.ts';
import { IStartGame } from '../models/IStartGame.ts';

export class GameColyseusHelper {
  public room: Room | null = null;

  private getAccessToken() {
    const { getAccessTokenFromLocalStorage } = authLocalStorageHelper()
    const accessToken = getAccessTokenFromLocalStorage()!;
    if(!accessToken) {
      throw new Error('Not Auth')
    }

    return accessToken
  }

  public async findGame(mode: string) {
    try {
      const accessToken = this.getAccessToken();
      this.room = await client.joinOrCreate(mode, { mode, accessToken });
      if(this.room) {
        this.room.onMessage('start search game', () => {
          gameStore.setSearch(true);
        })
        this.room.onMessage('confirm game', () => {
          gameStore.setSearch(false)
          gameStore.setConfirmed(true)
        })
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async cancelSearch() {
    if(!this.room) {
      throw new Error('User is not in the room')
    }

    await this.room.leave(true)
    gameStore.setSearch(false)
  }

  public async confirmGame() {
    try {
      if(!this.room) {
        throw new Error('User is not in the room')
      }
      this.room.send('user confirm game', this.room.sessionId);
      this.room.onMessage('waiting enemy', () => {
        gameStore.setConfirmed(false);
        gameStore.setWaitingEnemy(true)
      })
      this.room.onMessage('start game', (payload: IStartGame) => {
        gameStore.setEnemyId(payload.enemy)
        this.startGame(payload)
      })
    } catch (e) {
      console.log(e);
    }
  }

  private async startGame(payload: IStartGame) {
    try {
      if(!this.room) {
        throw new Error('User is not in the room')
      }
      const {setRoomIdToLocalStorage} = gameLocalStorageHelper();
      setRoomIdToLocalStorage(this.room.roomId);
      gameStore.setConfirmed(false);
      gameStore.setWaitingEnemy(false);
      gameStore.setStartGame(true);
      gameStore.setRoomId(this.room.roomId)
      gameStore.setEnemyId(payload.enemy);
      gameStore.setGameFen(payload.gameFen);
      gameStore.setUserColor(payload.playerColor);
      gameStore.setTurn(payload.turn);
    } catch (e) {
      console.log(e);
    }
  }
}


export default new GameColyseusHelper()