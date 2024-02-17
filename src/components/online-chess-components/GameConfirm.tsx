import { Paper, ThemeProvider, Typography } from '@mui/material';
import { gameRoom } from '../../rooms/game-room.ts';
import { inputTheme } from '../../theme/theme.ts';
import MyButton from '../ui/MyButton.tsx';
import * as React from 'react';

const GameConfirm: React.FC = () => {
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
          borderRadius: '15px',
        }}
        elevation={3}
      >
        <Typography component='h3' variant='h5'>
          Confirm the game
        </Typography>
        <MyButton
          width='100%'
          onClick={() => {
            gameRoom.confirmedGame();
          }}
        >
          Confirm
        </MyButton>
      </Paper>
    </ThemeProvider>
  );
};

export default GameConfirm;
