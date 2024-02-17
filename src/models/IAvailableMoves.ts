import { Square } from 'react-chessboard/dist/chessboard/types';

export interface IAvailableMoves {
  availableMoves: IMove[];
  squareData: IPiece;
  pieces: IPiece[];
}

interface IPiece {
  type: string;
  color: 'w' | 'b';
}

interface IMove {
  from: Square;
  to: Square;
}
