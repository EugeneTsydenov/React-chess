export interface IStartGame {
  enemy: number;
  gameFen: string;
  turn: 'w' | 'b' | '';
  playerColor: 'w' | 'b' | '';
}
