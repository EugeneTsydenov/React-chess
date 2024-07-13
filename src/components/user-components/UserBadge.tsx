import * as React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface UserBadgeProps {
  username: string | undefined;
  avatar: string | undefined
}

const UserBadge: React.FC<UserBadgeProps> = ({username, avatar}) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }}>
      <Avatar
        sx={{
          width: '30px',
          height: '30px'
        }}
        src={avatar}
        alt='avatar'
      />
      <Typography
        component='span'
        sx={{
          fontSize: '13px',
          fontWeight: '300'
        }}
      >
        {username}
      </Typography>
    </Box>
  );
};

export default UserBadge;