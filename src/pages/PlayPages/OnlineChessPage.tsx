import GameModeSelector from '../../components/online-chess-components/GameModeSelector.tsx';
import WaitingEnemy from '../../components/online-chess-components/WaitingEnemy.tsx';
import GameConfirm from '../../components/online-chess-components/GameConfirm.tsx';
import GameSearch from '../../components/online-chess-components/GameSearch.tsx';
import { Box, Container, Typography } from '@mui/material';
import { gameStore } from '../../store/game-store.ts';
import Layout from '../../layouts/Layout.tsx';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const OnlineChessPage: React.FC = observer(() => {
  if (gameStore.isStartGame) {
    return <Navigate to={`/game/${gameStore.roomId}`} />;
  }
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Box
          sx={{
            minWidth: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {gameStore.isSearch && <GameSearch />}
            {gameStore.isConfirmed && <GameConfirm />}
            {gameStore.isWaitingEnemy && <WaitingEnemy />}
            {gameStore.isConfirmed ||
            gameStore.isSearch ||
            gameStore.isWaitingEnemy ||
            gameStore.isStartGame ? (
              ''
            ) : (
              <>
                <Typography component='h3' variant='h5'>
                  Выберите режим игры
                </Typography>
                <GameModeSelector />
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
});

export default OnlineChessPage;
