import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, Typography } from '@mui/material';
import { gameStore } from '../../store/game-store.ts';
import { formatTimeHelper } from '../../helpers/formatTimeHelper.ts';
import { inputTheme } from '../../theme/theme.ts';

interface TimerProps {
  color: 'w' | 'b';
}

const Timer: React.FC<TimerProps> = observer(({color}) => {
  const time = color === 'w' ? gameStore.whiteTime : gameStore.blackTime;
  const formattedTime = formatTimeHelper(time)

  return (
    <ThemeProvider theme={inputTheme}>
      <Typography
        variant='h2'
        component='span'
        sx={{
          display: 'block',
          padding: 2,
          backgroundColor: color === gameStore.turn ? 'secondary.main' : '#262626',
          m: 2
        }}
      >
        {formattedTime}
      </Typography>
    </ThemeProvider>
  );
});

export default Timer;