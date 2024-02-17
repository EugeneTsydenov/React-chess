import { Square } from 'react-chessboard/dist/chessboard/types';
import { gameRoom } from '../rooms/game-room.ts';

export function moveHelper(sourceSquare: Square, targetSquare: Square, piece: string) {
  console.log(piece);
  gameRoom.move({
    from: sourceSquare,
    to: targetSquare,
    promotion: piece.toLowerCase() ?? 'q',
  });

  return true;
}
