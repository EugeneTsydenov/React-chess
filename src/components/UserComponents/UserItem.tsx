import { MenuItem, Typography } from '@mui/material';
import Logout from './Logout.tsx';
import * as React from 'react';

interface UserItemProps {
  setting: string;
  handleCloseUserMenu: () => void;
}

const UserItem: React.FC<UserItemProps> = ({ setting, handleCloseUserMenu }) => {
  if (setting === 'Logout') {
    return (
      <MenuItem
        onClick={handleCloseUserMenu}
        sx={{
          padding: '0px',
        }}
      >
        <Logout setting={setting} />
      </MenuItem>
    );
  }

  return (
    <MenuItem
      onClick={handleCloseUserMenu}
      sx={{
        padding: '0px',
      }}
    >
      <Typography
        textAlign='center'
        sx={{
          padding: '6px 16px',
        }}
      >
        {setting}
      </Typography>
    </MenuItem>
  );
};

export default UserItem;
