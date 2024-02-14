import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { IMode } from '../../models/IMode.ts';

interface GameModeItem {
  gameMode: IMode;
  selectedMode: string | null;
  handleClick: (mode: string) => void
}

const GameModeItem: React.FC<GameModeItem> = React.memo(({gameMode, selectedMode, handleClick}) => {
  return (
    <Paper
      sx={{
        width: '95%',
        height: '95%',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        opacity: selectedMode !== gameMode.serverMode ? '0.8' : '1',
        backgroundColor: selectedMode === gameMode.serverMode ? 'primary.light' : 'primary'
      }}
      onClick={() => {
        handleClick(gameMode.serverMode)
      }}
    >
      <Typography
        variant='h5'
      >
        {gameMode.clientMode}
      </Typography>
      <Typography
        variant='h5'
      >
        {gameMode.clientTime}
      </Typography>
    </Paper>
  );
});

export default GameModeItem;