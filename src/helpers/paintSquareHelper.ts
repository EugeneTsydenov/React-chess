import { Square } from 'react-chessboard/dist/chessboard/types';
import { gameStore } from '../store/game-store.ts';
import { gameRoom } from '../rooms/game-room.ts';
import { CSSProperties } from 'react';

export async function paintSquareHelper(square: Square, isClick: boolean) {
  const { availableMoves, squareData, pieces } = await gameRoom.getAvailableMoves(square);
  const newSquares: { [square: string]: CSSProperties } = {};

  if (gameStore.userColor === squareData.color) {
    availableMoves.map((move, index) => {
      newSquares[move.to] = {
        background:
          pieces[index] && pieces[index].color !== squareData.color
            ? 'radial-gradient(red, transparent 80%)'
            : 'radial-gradient(#8acb77, transparent 25%)',
        borderRadius: '50%',
      };
      return move;
    });

    if (isClick) {
      newSquares[square] = {
        backgroundColor: '#589645',
      };
    }
  }

  return {
    newSquares,
    squareData,
  };
}
