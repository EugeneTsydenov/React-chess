import * as React from 'react';
import Layout from '../../layouts/Layout.tsx';
import { Box, Container, Typography } from '@mui/material';
import GameModeSelector from '../../components/OnlineChessComponents/GameModeSelector.tsx';

const OnlineChessPage: React.FC = () => {
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
            <Typography
              component='h3'
              variant='h5'
            >
              Выберите режим игры
            </Typography>
            <GameModeSelector/>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default OnlineChessPage;
