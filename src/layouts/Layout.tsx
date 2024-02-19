import Header from '../components/header/Header.tsx';
import * as React from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 70px)',
        mt: '70px'
      }}
    >
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
