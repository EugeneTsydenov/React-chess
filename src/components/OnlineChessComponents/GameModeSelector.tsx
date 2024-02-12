import React, { useState } from 'react';
import MyButton from '../ui/MyButton.tsx';
import { Box, CircularProgress, ThemeProvider } from '@mui/material';
import { inputTheme } from '../../theme/theme.ts';
import gameModes from '../../data/GameModes.ts';
import GameModeItem from './GameModeItem.tsx';
import { IModeValue } from '../../models/IMode.ts';
import client from '../../http/colyseus.ts';
import { authLocalStorageHelper } from '../../helpers/authLocalStorageHelper.ts';

const GameModeSelector: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<IModeValue | null>(null);
  const [isLoading, setLoading] = useState(false);

  const handleClick = (gameModeValue: IModeValue) => {
    setSelectedPaper(gameModeValue);
  };

  const joinMatchmaking = async (mode: IModeValue | null) => {
    setLoading(true)
    try {
      const { getAccessTokenFromLocalStorage } = authLocalStorageHelper()
      const accessToken = getAccessTokenFromLocalStorage()!;
      if(!accessToken) {
        throw new Error('Not Auth')
      }
      const room = await client.joinOrCreate('matchmaking', { mode, accessToken });
      room.onStateChange(() => {
        console.log(1);
      })

      room.onMessage('chat', (payload) => {
        console.log(payload);
      });

      room.onMessage('startGame', () => {
        console.log('game start');
        setLoading(false)
      })
      room.send('chat', { message: 'Привет от игрока!' });
    } catch (error) {
      console.error('Failed to join matchmaking:', error);
    }
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
        {
          isLoading ?
            <CircularProgress/> :
            <>
              {gameModes.map((gameMode, index) => (
                <GameModeItem
                  key={index}
                  gameMode={gameMode}
                  selectedPaper={selectedPaper}
                  handleClick={handleClick}
                />
              ))}
              <MyButton width="95%" height="95%" onClick={async () => {
                await joinMatchmaking(selectedPaper);
              }}>
                Find your opponent
              </MyButton>
            </>
        }
      </Box>
    </ThemeProvider>
  );
};

export default GameModeSelector;
