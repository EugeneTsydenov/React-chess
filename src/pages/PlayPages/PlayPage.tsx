import Layout from '../../layouts/Layout.tsx';
import * as React from 'react';
import { gameStore } from '../../store/gameStore.ts';
import { observer } from 'mobx-react-lite';
import { Box, Container } from '@mui/material';
import { Chessboard } from 'react-chessboard';
import { Navigate, useParams } from 'react-router-dom';
import { isDraggablePiece, onDrop } from '../../helpers/dragNDropHelper.ts';

const PlayPage: React.FC = observer(() => {
  const params = useParams();

  if(params.id !== gameStore.roomId) {
    return <Navigate to='/'/>
  }

  return (
    <Layout>
      <Container maxWidth='lg'>
        <Box sx={{
          minWidth: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            gap: '10px',
            width: '500px',
            height: '500px',
          }}>
            <Chessboard
              position={gameStore.gameFen}
              showBoardNotation={true}
              boardOrientation={gameStore.userColor === 'w' ? 'white' : 'black'}
              isDraggablePiece={isDraggablePiece}
              onPieceDrop={onDrop}
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
});

export default PlayPage;
