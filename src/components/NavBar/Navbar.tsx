import NavBarItem from '../NavBarItem/NavBarItem.tsx';
import { links } from '../../data/NavLinks.js';
import { Links } from '../../models/Links.ts';
import { Box, MenuList } from '@mui/material';
import { FC } from 'react';

const NavBar: FC = () => {
  return (
    <Box component={'nav'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <MenuList
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {links.map((link: Links, i: number) => {
          return <NavBarItem link={link} key={i} />;
        })}
      </MenuList>
    </Box>
  );
};

export default NavBar;
