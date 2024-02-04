import { useAuth } from '../../hooks/useAuth.ts';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import * as React from 'react';

interface LogoutProps {
  setting: string;
}

const Logout: React.FC<LogoutProps> = observer(({ setting }) => {
  const { logout } = useAuth();

  return (
    <button
      type='submit'
      onClick={(e) => {
        e.stopPropagation();
        logout.mutate();
      }}
    >
      <Typography
        sx={{
          padding: '6px 16px',
        }}
      >
        {setting}
      </Typography>
    </button>
  );
});

export default Logout;
