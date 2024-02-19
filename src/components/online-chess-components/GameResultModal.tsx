import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Modal, Typography } from '@mui/material';
import { resultGameStore } from '../../store/result-game-store.ts';
import MyButton from '../ui/MyButton.tsx';
import CloseIcon from '@mui/icons-material/Close';
import { gameStore } from '../../store/game-store.ts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'primary.main',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px',
};

const GameResultModal: React.FC = observer(() => {
  if(gameStore.isGameOver) {
    return (
      <Modal
        keepMounted
        open={gameStore.isGameOver}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              gap: 4
            }}
          >
            <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
              {resultGameStore.status}
            </Typography>
            <Typography id="keep-mounted-modal-description" variant='h6' component='p'>
              {resultGameStore.message}
            </Typography>
            <MyButton width='100%'>
              Реванш
            </MyButton>
            <Button
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                color: 'inherit',
                p: 0,
                minWidth: 'auto'
              }}
              onClick={() => {
                gameStore.setGameOver(false)
              }}
            >
              <CloseIcon/>
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }
});

export default GameResultModal;