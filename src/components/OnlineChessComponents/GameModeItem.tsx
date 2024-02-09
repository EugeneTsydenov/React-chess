import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { IMode, IModeValue } from '../../models/IMode.ts';

interface GameModeItem {
  gameMode: IMode;
  selectedPaper: IModeValue | null;
  handleClick: (gameModeValue: IModeValue) => void
}

const GameModeItem: React.FC<GameModeItem> = React.memo(({gameMode, selectedPaper, handleClick}) => {
  return (
    <Paper
      sx={{
        width: '95%',
        height: '95%',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        opacity: selectedPaper !== gameMode.value ? '0.8' : '1',
        backgroundColor: selectedPaper === gameMode.value ? 'primary.light' : 'primary'
      }}
      onClick={() => {
        handleClick(gameMode.value)
      }}
    >
      <Typography
        variant='h5'
      >
        {gameMode.mode}
      </Typography>
      <Typography
        variant='h5'
      >
        {gameMode.time}
      </Typography>
    </Paper>
  );
});

export default GameModeItem;