import Layout from '../../../layouts/Layout.tsx';
import { Box } from '@mui/material';
import * as React from 'react';

const OfflineChessPage: React.FC = () => {
  return (
    <Layout>
      <main>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          <div className='container'>WrapperBoard</div>
        </Box>
      </main>
    </Layout>
  );
};

export default OfflineChessPage;
