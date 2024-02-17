import { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import { paintSquareHelper } from '../../helpers/paintSquareHelper.ts';
import { useClickSquare } from '../../hooks/useClickSquare.ts';
import { moveHelper } from '../../helpers/moveHelper.ts';
import { gameStore } from '../../store/game-store.ts';
import { Chessboard } from 'react-chessboard';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

interface IDragPiece {
  piece: Piece;
  sourceSquare: Square;
}

const Chess: React.FC = observer(() => {
  const [availableMoves, setAvailableMoves] = React.useState({});
  const { onSquareClick } = useClickSquare(setAvailableMoves);

  async function onDragBegin(sourceSquare: Square) {
    if (sourceSquare === null) return false;

    const { newSquares } = await paintSquareHelper(sourceSquare, false);

    if (newSquares) {
      setAvailableMoves(newSquares);
      return true;
    }

    return false;
  }

  function onDragEnd() {
    setAvailableMoves({});
  }

  function isDraggablePiece({ piece }: IDragPiece) {
    return gameStore.userColor === piece[0];
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    return moveHelper(sourceSquare, targetSquare, piece[1]);
  }

  return (
    <Chessboard
      position={gameStore.gameFen}
      showBoardNotation={true}
      boardOrientation={gameStore.userColor === 'w' ? 'white' : 'black'}
      isDraggablePiece={isDraggablePiece}
      onPieceDrop={onDrop}
      customSquareStyles={{
        [gameStore.kingSquareIsInCheck]: {
          background: 'radial-gradient(red, transparent 80%)',
          borderRadius: '50%',
        },
        ...availableMoves,
      }}
      onPieceDragBegin={async (_, sourceSquare) => {
        await onDragBegin(sourceSquare);
      }}
      onPieceDragEnd={onDragEnd}
      onSquareClick={onSquareClick}
    />
  );
});

export default Chess;
