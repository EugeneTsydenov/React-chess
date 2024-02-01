import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import { FC, MouseEventHandler, useContext, useState } from 'react';
import { Context } from '../../main.tsx';
import UserList from './UserList.tsx';

interface UserProps {}

const User: FC<UserProps> = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const { store } = useContext(Context);

  const handleOpenUserMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src={store.user.avatar} />
        </IconButton>
      </Tooltip>
      <Typography component='span'>{store.user.username}</Typography>
      <UserList anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
    </Box>
  );
};

export default User;
