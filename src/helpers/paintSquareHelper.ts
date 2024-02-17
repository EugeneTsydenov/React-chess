import { Square } from 'react-chessboard/dist/chessboard/types';
import { gameStore } from '../store/game-store.ts';
import { gameRoom } from '../rooms/game-room.ts';
import { CSSProperties } from 'react';

export async function paintSquare(square: Square, action: 'drag' | 'click') {
  const { availableMoves, color, pieces } = await gameRoom.getAvailableMoves(square);

  if (gameStore.userColor === color) {
    const newSquares: { [square: string]: CSSProperties } = {};

    availableMoves.map((move, index) => {
      newSquares[move.to] = {
        background:
          pieces[index] && pieces[index].color !== color
            ? 'radial-gradient(red, transparent 80%)'
            : 'radial-gradient(#8acb77, transparent 25%)',
        borderRadius: '50%',
      };
      return move;
    });

    if (action === 'drag') {
      return newSquares;
    }

    if (action === 'click') {
      newSquares[square] = {
        backgroundColor: '#589645',
      };

      return newSquares;
    }
  }
}
