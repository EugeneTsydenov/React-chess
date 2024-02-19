import React, { ReactNode, MouseEventHandler } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { inputTheme } from '../../theme/theme.ts';

interface ButtonProps {
  width?: string;
  height?: string | '50px';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const MyButton: React.FC<ButtonProps> = ({ children, width, height, onClick }) => {
  return (
    <ThemeProvider theme={inputTheme}>
      <Button
        type='submit'
        variant='contained'
        color='secondary'
        sx={{
          width: width,
          height: height,
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default MyButton;
