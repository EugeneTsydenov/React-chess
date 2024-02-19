import { paintSquareHelper } from '../helpers/paintSquareHelper.ts';
import { Square } from 'react-chessboard/dist/chessboard/types';
import { gameStore } from '../store/game-store.ts';
import { gameRoom } from '../rooms/game-room.ts';
import * as React from 'react';

export function useClickSquare(setAvailableMoves: React.Dispatch<React.SetStateAction<object>>) {
  const [moveFrom, setMoveFrom] = React.useState<Square | ''>('');
  const [moveTo, setMoveTo] = React.useState<Square | null>(null);
  async function onSquareClick(square: Square) {
    if (gameStore.turn !== gameStore.userColor) {
      return;
    }

    if (!moveFrom) {
      const hasMoveOptions = await paintSquareHelper(square, true);
      setAvailableMoves(hasMoveOptions.newSquares);
      if (hasMoveOptions) setMoveFrom(square);
      return;
    }

    if (!moveTo) {
      const { availableMoves } = await gameRoom.getAvailableMoves(moveFrom);

      const foundMove = availableMoves.find((move) => move.from === moveFrom && move.to === square);

      if (!foundMove) {
        const hasMoveOptions = await paintSquareHelper(square, true);
        setMoveFrom(hasMoveOptions.newSquares ? square : '');
        setAvailableMoves(hasMoveOptions.newSquares);
        return;
      }

      setMoveTo(square);

      gameRoom.move({
        from: moveFrom,
        to: square,
        promotion: 'q',
      });

      if (gameStore.move === null) {
        const hasMoveOptions = await paintSquareHelper(square, true);
        if (hasMoveOptions) setMoveFrom(square);
        return;
      }

      setMoveFrom('');
      setMoveTo(null);
      setAvailableMoves({});
      return;
    }
  }
  return {
    onSquareClick,
  };
}
