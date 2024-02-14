import * as React from 'react';
import { Paper, ThemeProvider, Typography } from '@mui/material';
import { inputTheme } from '../../theme/theme.ts';

const WaitingEnemy: React.FC = () => {
  return (
    <ThemeProvider theme={inputTheme}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          padding: 5,
          borderRadius: '15px'
        }}
        elevation={3}
      >
        <Typography
          component='h3'
          variant='h5'
        >
          We wait until the enemy confirms
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default WaitingEnemy;