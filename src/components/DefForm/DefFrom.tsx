import { FC, FormEventHandler, ReactNode } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { inputTheme } from '../../theme/theme.ts';

interface DefFormProps {
  children: ReactNode;
  method: FormEventHandler<HTMLFormElement>;
}

const DefFrom: FC<DefFormProps> = ({ children, method }) => {
  return (
    <ThemeProvider theme={inputTheme}>
      <form method='POST' onSubmit={method}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: '10px 15px',
          }}
        >
          {children}
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default DefFrom;
