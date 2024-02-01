import { Typography } from '@mui/material';
import { FC } from 'react';

interface LogoutProps {
  setting: string;
}

const Logout: FC<LogoutProps> = ({ setting }) => {
  return (
    <button type='submit'>
      <Typography>{setting}</Typography>
    </button>
  );
};

export default Logout;
