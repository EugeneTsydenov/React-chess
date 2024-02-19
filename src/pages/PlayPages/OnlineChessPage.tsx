import GameModeSelector from '../../components/online-chess-components/GameModeSelector.tsx';
import WaitingEnemy from '../../components/online-chess-components/WaitingEnemy.tsx';
import GameConfirm from '../../components/online-chess-components/GameConfirm.tsx';
import GameSearch from '../../components/online-chess-components/GameSearch.tsx';
import { matchmakingStore } from '../../store/matchmaking-store.ts';
import { Box, Container, Typography } from '@mui/material';
import Layout from '../../layouts/Layout.tsx';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const OnlineChessPage: React.FC = observer(() => {
  if (matchmakingStore.isStartGame) {
    return <Navigate to={`/game/${matchmakingStore.roomId}`} />;
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
            {matchmakingStore.isSearch && <GameSearch />}
            {matchmakingStore.isConfirmed && <GameConfirm />}
            {matchmakingStore.isWaitingEnemy && <WaitingEnemy />}
            {matchmakingStore.isConfirmed ||
            matchmakingStore.isSearch ||
            matchmakingStore.isWaitingEnemy ||
            matchmakingStore.isStartGame ? (
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
