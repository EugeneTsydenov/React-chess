import React, { ReactNode, MouseEventHandler } from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
  width?: string;
  height?: string | '50px';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const MyButton: React.FC<ButtonProps> = ({ children, width, height, onClick }) => {
  return (
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
  );
};

export default MyButton;
