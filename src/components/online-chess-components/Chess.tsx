import { isDraggablePiece, onDrop } from '../../helpers/dragNDropHelper.ts';
import { gameStore } from '../../store/game-store.ts';
import { Chessboard } from 'react-chessboard';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const Chess: React.FC = observer(() => {
  console.log(gameStore.kingSquareIsInCheck);
  return (
    <Chessboard
      position={gameStore.gameFen}
      showBoardNotation={true}
      boardOrientation={gameStore.userColor === 'w' ? 'white' : 'black'}
      isDraggablePiece={isDraggablePiece}
      onPieceDrop={onDrop}
      customSquareStyles={{
        [gameStore.kingSquareIsInCheck]: {
          backgroundColor: 'rgba(255, 0, 0, 0.3)',
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.7)',
          borderRadius: '50%'
        }
      }}
    />
  );
});

export default Chess;
