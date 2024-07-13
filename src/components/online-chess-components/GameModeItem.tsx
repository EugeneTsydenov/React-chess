import { Paper, Typography } from '@mui/material';
import { IMode } from '../../models/IMode.ts';
import * as React from 'react';

interface GameModeItem {
  gameMode: IMode;
  selectedMode: IMode | null;
  handleClick: (mode: IMode) => void;
}

const GameModeItem: React.FC<GameModeItem> = React.memo(
  ({ gameMode, selectedMode, handleClick }) => {
    return (
      <Paper
        sx={{
          width: '95%',
          height: '95%',
          cursor: 'pointer',
          display: 'grid',
          placeItems: 'center',
          opacity: selectedMode?.serverMode !== gameMode.serverMode ? '0.8' : '1',
          backgroundColor: selectedMode?.serverMode === gameMode.serverMode ? 'primary.light' : 'primary',
        }}
        onClick={() => {
          handleClick(gameMode);
        }}
      >
        <Typography variant='h5'>{gameMode.clientMode}</Typography>
        <Typography variant='h5'>{gameMode.clientTime}</Typography>
      </Paper>
    );
  },
);

export default GameModeItem;
