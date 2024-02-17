import Chess from '../../components/online-chess-components/Chess.tsx';
import { matchmakingStore } from '../../store/matchmaking-store.ts';
import { Navigate, useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Layout from '../../layouts/Layout.tsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const PlayPage: React.FC = observer(() => {
  const params = useParams();

  if (params.id !== matchmakingStore.roomId) {
    return <Navigate to='/' />;
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
              width: '640px',
              height: '640px',
            }}
          >
            <Chess />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
});

export default PlayPage;
