import { Box, Card, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from './Layout.tsx';
import * as React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  isLogin: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, isLogin }) => {
  return (
    <Layout>
      <main>
        <section>
          <Container maxWidth='lg'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '10px',
                minHeight: '100vh',
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '15px 20px',
                }}
              >
                <Typography component='h1' variant='h4' color='primary.contrastText' mb={4}>
                  {isLogin ? 'Authorization' : 'Registration'}
                </Typography>
                {children}
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {isLogin ? (
                    <Link to='/registration'>Don't have an account?</Link>
                  ) : (
                    <Link to='/login'>Already have an account?</Link>
                  )}
                  {isLogin && <Link to='/#'>Forgot your password?</Link>}
                </Box>
              </Card>
            </Box>
          </Container>
        </section>
      </main>
    </Layout>
  );
};

export default AuthLayout;
