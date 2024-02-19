import { LinearProgress, Paper, ThemeProvider, Typography } from '@mui/material';
import { gameRoom } from '../../rooms/game-room.ts';
import { inputTheme } from '../../theme/theme.ts';
import MyButton from '../ui/MyButton.tsx';
import * as React from 'react';

const GameSearch: React.FC = () => {
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
          The enemy is being searched for
        </Typography>
        <LinearProgress sx={{ width: '100%' }} />
        <MyButton
          width='100%'
          onClick={async () => {
            await gameRoom.cancelSearch();
          }}
        >
          Cancel search
        </MyButton>
      </Paper>
    </ThemeProvider>
  );
};

export default GameSearch;
