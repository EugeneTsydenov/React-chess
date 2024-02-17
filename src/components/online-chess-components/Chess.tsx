import { isDraggablePiece, onDrop } from '../../helpers/dragNDropHelper.ts';
import { gameStore } from '../../store/game-store.ts';
import { Chessboard } from 'react-chessboard';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const Chess: React.FC = observer(() => {
  return (
    <Chessboard
      position={gameStore.gameFen}
      showBoardNotation={true}
      boardOrientation={gameStore.userColor === 'w' ? 'white' : 'black'}
      isDraggablePiece={isDraggablePiece}
      onPieceDrop={onDrop}
    />
  );
});

export default Chess;
