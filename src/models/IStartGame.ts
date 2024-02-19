export interface IStartGame {
  enemy: IEnemy;
  gameFen: string;
  turn: 'w' | 'b' | '';
  playerColor: 'w' | 'b' | '';
}

export interface IEnemy {
  userId: number,
  username: string,
  avatar: string
}
