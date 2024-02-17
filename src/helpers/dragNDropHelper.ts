import { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import { gameStore } from '../store/game-store.ts';
import { gameRoom } from '../rooms/game-room.ts';

interface IDragPiece {
  piece: Piece;
  sourceSquare: Square;
}

export function isDraggablePiece({ piece }: IDragPiece) {
  return gameStore.userColor === piece[0];
}

export function onDrop(sourceSquare: Square, targetSquare: Square) {
  gameRoom.move({
    from: sourceSquare,
    to: targetSquare,
  });

  return true;
}
