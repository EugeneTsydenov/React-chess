import {React, useContext, useState} from 'react';
import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import {Context} from "../../main.tsx";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const User = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const {store} = useContext(Context);

  const handleOpenUserMenu = (event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={store.user.avatar} />
        </IconButton>
      </Tooltip>
      <Typography
        component='span'
      >
        {store.user.username}
      </Typography>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default User;