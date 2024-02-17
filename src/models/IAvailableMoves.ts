import { Square } from 'react-chessboard/dist/chessboard/types';

export interface IAvailableMoves {
  availableMoves: IMove[];
  color: 'w' | 'b';
  pieces: IPieces[];
}

interface IPieces {
  type: string;
  color: 'w' | 'b';
}

interface IMove {
  from: Square;
  to: Square;
}
