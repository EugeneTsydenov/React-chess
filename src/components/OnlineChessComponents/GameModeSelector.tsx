import React, { MouseEventHandler, useState } from 'react';
import MyButton from '../ui/MyButton.tsx';
import { Box, ThemeProvider } from '@mui/material';
import { inputTheme } from '../../theme/theme.ts';
import gameModes from '../../data/GameModes.ts';
import GameModeItem from './GameModeItem.tsx';
import { IModeValue } from '../../models/IMode.ts';

const GameModeSelector: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<IModeValue | null>(null);

  const handleClick = (gameModeValue: IModeValue) => {
    setSelectedPaper(gameModeValue);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ThemeProvider theme={inputTheme}>
      <Box
        sx={{
          display: 'grid',
          padding: 1,
          gridTemplateColumns: 'repeat(3, 150px)',
          gridTemplateRows: 'repeat(4, 130px);',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {gameModes.map((gameMode, index) => (
          <GameModeItem
            key={index}
            gameMode={gameMode}
            selectedPaper={selectedPaper}
            handleClick={handleClick}
          />
        ))}
        <MyButton width="95%" height="95%" onClick={handleSubmit}>
          Start searching for an enemy
        </MyButton>
      </Box>
    </ThemeProvider>
  );
};

export default GameModeSelector;
