import gameColyseusHelper from '../../helpers/gameColyseusHelper.ts';
import { Box, ThemeProvider } from '@mui/material';
import { inputTheme } from '../../theme/theme.ts';
import gameModes from '../../data/GameModes.ts';
import GameModeItem from './GameModeItem.tsx';
import MyButton from '../ui/MyButton.tsx';
import React, { useState } from 'react';

const GameModeSelector: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handleClick = (mode: string) => {
    setSelectedMode(mode);
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
            selectedMode={selectedMode}
            handleClick={handleClick}
          />
        ))}
        <MyButton
          width='95%'
          height='95%'
          onClick={async () => {
            if (selectedMode) {
              await gameColyseusHelper.findGame(selectedMode);
            }
          }}
        >
          Find your opponent
        </MyButton>
      </Box>
    </ThemeProvider>
  );
};

export default GameModeSelector;
