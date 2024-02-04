import { Avatar, Box, IconButton, Skeleton, Tooltip, Typography } from '@mui/material';
import useUser from '../../hooks/useUser.ts';
import { observer } from 'mobx-react-lite';
import UserList from './UserList.tsx';
import * as React from 'react';

const User: React.FC = observer(() => {
  const { data, isLoading } = useUser();

  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(null);
  const handleOpenUserMenu: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      {isLoading || data === undefined ? (
        <>
          <Skeleton animation='wave' variant='circular' width={40} height={40} />
          <Skeleton width={50} />
        </>
      ) : (
        <>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' src={data.avatar} />
            </IconButton>
          </Tooltip>
          <Typography component='span'>{data.username}</Typography>
          <UserList anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
        </>
      )}
    </Box>
  );
});

export default User;
