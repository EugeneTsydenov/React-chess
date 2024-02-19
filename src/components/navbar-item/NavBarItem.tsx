import NavDropDownMenu from '../nav-dropdown-menu/NavDropDownMenu.tsx';
import { Box, Typography } from '@mui/material';
import { Links } from '../../models/Links.ts';
import { NavLink } from 'react-router-dom';
import * as React from 'react';

interface NavBarItemPropTypes {
  link: Links;
}

const NavBarItem: React.FC<NavBarItemPropTypes> = ({ link }) => {
  const [isHovered, setHovered] = React.useState(false);
  const { title, associatedLinks, path } = link;

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setHovered(false);
  };

  return (
    <Box
      component='li'
      sx={{
        position: 'relative',
        backgroundColor: isHovered ? 'primary.light' : 'transparent',
        padding: '15px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to={path}>
        <Typography
          component='p'
          sx={{
            fontFamily: 'NotoSansMedium, sans-serif',
            fontSize: '18px',
            opacity: '.6',
            transition: 'all .3s ease',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        >
          {title}
        </Typography>
      </NavLink>
      <NavDropDownMenu associatedLinks={associatedLinks} isHovered={isHovered} />
    </Box>
  );
};

export default NavBarItem;
