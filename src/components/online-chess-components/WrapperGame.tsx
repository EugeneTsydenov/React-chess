import * as React from 'react';
import { Box } from '@mui/material';
import GameResultModal from './GameResultModal.tsx';
import Chat from './Chat.tsx';
import { observer } from 'mobx-react-lite';
import MyChessboard from './Chessboard.tsx';
import { gameStore } from '../../store/game-store.ts';
import UserBadge from '../user-components/UserBadge.tsx';
import useUser from '../../hooks/useUser.ts';
import Timer from './Timer.tsx';



const WrapperGame: React.FC = observer( ()=> {
  const {data} = useUser()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }}
    >
      <Chat/>
      <Box sx={{
        width: '640px',
        height: '640px'
      }}>
        <MyChessboard/>
      </Box>
      <Box>
        <UserBadge username={gameStore.enemy?.username} avatar={gameStore.enemy?.avatar}/>
        {
          gameStore.userColor === 'w' ?
            <Timer color='b'/> :
            <Timer color='w'/>
        }

        
        {
          gameStore.userColor === 'w' ?
            <Timer color='w'/> :
            <Timer color='b'/>
        }
        <UserBadge username={data?.username} avatar={data?.avatar}/>
      </Box>
      <GameResultModal/>
    </Box>
  );
});

export default WrapperGame;