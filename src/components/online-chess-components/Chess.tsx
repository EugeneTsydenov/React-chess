import { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import { paintSquare } from '../../helpers/paintSquareHelper.ts';
import { CSSProperties, Dispatch, SetStateAction } from 'react';
import { gameStore } from '../../store/game-store.ts';
import { gameRoom } from '../../rooms/game-room.ts';
import { Chessboard } from 'react-chessboard';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

interface IDragPiece {
  piece: Piece;
  sourceSquare: Square;
}

const Chess: React.FC = observer(() => {
  const [availableMoves, setAvailableMoves] = React.useState({});

  React.useEffect(() => {
    const handleMouseDown = () => {
      setAvailableMoves([]);
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  function isDraggablePiece({ piece }: IDragPiece) {
    return gameStore.userColor === piece[0];
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    gameRoom.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? 'q',
    });

    return true;
  }

  async function onDragBegin(
    piece: Piece,
    sourceSquare: Square,
    setAvailableMoves: Dispatch<SetStateAction<{ [square: string]: CSSProperties }>>,
  ) {
    if (sourceSquare === null) return false;

    const newSquares = await paintSquare(sourceSquare, 'drag');

    if (newSquares) {
      setAvailableMoves(newSquares);
      return true;
    }

    return false;
  }

  function onDragEnd(
    setAvailableMoves: Dispatch<SetStateAction<{ [square: string]: CSSProperties }>>,
  ) {
    setAvailableMoves({});
  }

  async function onSquareClick(square: Square) {
    if (square === null) {
      setAvailableMoves({});
    }

    const newSquares = await paintSquare(square, 'click');

    if (newSquares) {
      setAvailableMoves(newSquares);
    }
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
      onPieceDragBegin={async (piece: Piece, sourceSquare) => {
        await onDragBegin(piece, sourceSquare, setAvailableMoves);
      }}
      onPieceDragEnd={() => {
        onDragEnd(setAvailableMoves);
      }}
      onSquareClick={async (square: Square) => {
        await onSquareClick(square);
      }}
    />
  );
});

export default Chess;
