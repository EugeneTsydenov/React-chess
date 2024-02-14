import * as React from 'react';
import Layout from '../../layouts/Layout.tsx';
import { Box, Container, Typography } from '@mui/material';
import GameModeSelector from '../../components/OnlineChessComponents/GameModeSelector.tsx';
import { observer } from 'mobx-react-lite';
import { gameStore } from '../../store/gameStore.ts';
import GameSearch from '../../components/OnlineChessComponents/GameSearch.tsx';
import GameConfirm from '../../components/OnlineChessComponents/GameConfirm.tsx';
import WaitingEnemy from '../../components/OnlineChessComponents/WaitingEnemy.tsx';
import { Navigate } from 'react-router-dom';

const OnlineChessPage: React.FC = observer(() => {
  if(gameStore.isStartGame) {
    return <Navigate to={`/game/${gameStore.roomId}`}/>
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
            gap: '10px'
          }}>
            {
              gameStore.isSearch &&
                <GameSearch/>
            }
            {
              gameStore.isConfirmed &&
                <GameConfirm/>
            }
            {
              gameStore.isWaitingEnemy &&
                <WaitingEnemy/>
            }
            {
              gameStore.isConfirmed || gameStore.isSearch || gameStore.isWaitingEnemy || gameStore.isStartGame ?
                '' :
                <>
                  <Typography
                    component='h3'
                    variant='h5'
                  >
                    Выберите режим игры
                  </Typography>
                  <GameModeSelector/>
                </>
            }
          </Box>
        </Box>
      </Container>
    </Layout>
  );
});

export default OnlineChessPage;
