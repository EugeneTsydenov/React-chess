export interface IMovedData {
  fen: string;
  turn: 'w' | 'b';
  isCheck: boolean;
  isCheckmate: boolean;
  isGameOver: boolean;
}
