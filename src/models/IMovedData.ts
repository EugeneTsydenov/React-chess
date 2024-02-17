import { Square } from 'react-chessboard/dist/chessboard/types';

export interface IMovedData {
  fen: string;
  turn: 'w' | 'b';
  isCheck: boolean;
  isCheckmate: boolean;
  isGameOver: boolean;
  kingSquareIsInCheck: Square | ''
}
