import { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import gameColyseusHelper from './gameColyseusHelper.ts';
import { gameStore } from '../store/game-store.ts';

interface IDragPiece {
  piece: Piece;
  sourceSquare: Square;
}

export function isDraggablePiece({ piece }: IDragPiece) {
  return gameStore.userColor === piece[0];
}

export function onDrop(sourceSquare: Square, targetSquare: Square) {
  gameColyseusHelper.move({
    from: sourceSquare,
    to: targetSquare,
  });

  return true;
}
