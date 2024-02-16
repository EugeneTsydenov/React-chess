import Layout from '../../layouts/Layout.tsx';
import * as React from 'react';
import { gameStore } from '../../store/gameStore.ts';
import { observer } from 'mobx-react-lite';
import { Box, Container } from '@mui/material';
import { Chessboard } from 'react-chessboard';

const PlayPage: React.FC = observer(() => {
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
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
});

export default PlayPage;
