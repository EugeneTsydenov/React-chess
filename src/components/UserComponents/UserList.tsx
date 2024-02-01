import UserItem from './UserItem.tsx';
import { Menu } from '@mui/material';
import { FC } from 'react';

interface UserListProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const UserList: FC<UserListProps> = ({ anchorElUser, handleCloseUserMenu }) => {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id='menu-appbar'
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting, index) => (
        <UserItem key={index} setting={setting} handleCloseUserMenu={handleCloseUserMenu} />
      ))}
    </Menu>
  );
};

export default UserList;
