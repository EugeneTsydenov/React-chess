import { MenuItem, Typography } from '@mui/material';
import Logout from './Logout.tsx';
import { FC } from 'react';

interface UserItemProps {
  setting: string;
  handleCloseUserMenu: () => void;
}

const UserItem: FC<UserItemProps> = ({ setting, handleCloseUserMenu }) => {
  if (setting === 'Logout') {
    return (
      <MenuItem onClick={handleCloseUserMenu}>
        <Logout setting={setting} />
      </MenuItem>
    );
  }

  return (
    <MenuItem onClick={handleCloseUserMenu}>
      <Typography textAlign='center'>{setting}</Typography>
    </MenuItem>
  );
};

export default UserItem;
