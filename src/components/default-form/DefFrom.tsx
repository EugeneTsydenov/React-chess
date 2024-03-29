import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormValues } from '../../models/IForm.ts';
import { inputTheme } from '../../theme/theme';
import MyButton from '../ui/MyButton.tsx';
import { useForm } from 'react-hook-form';
import * as React from 'react';

interface DefFormProps {
  method: (data: {
    email: string;
    username?: string | undefined;
    password: string;
  }) => Promise<void>;
  name: 'login' | 'registration';
}

const DefForm: React.FC<DefFormProps> = ({ method, name }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = async (data: { email: string; username?: string; password: string }) => {
    if (name === 'login') {
      await method({ email: data.email, password: data.password });
    }
    if (name === 'registration') {
      await method({ email: data.email, username: data.username, password: data.password });
    }
  };

  return (
    <ThemeProvider theme={inputTheme}>
      <form method='POST' onSubmit={handleSubmit(onSubmit)}>
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
          <TextField
            {...register('email', { required: true })}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            required
            sx={{
              width: '40ch',
            }}
          />
          {name === 'registration' && (
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              required
              sx={{
                width: '40ch',
              }}
              {...register('username', { required: true })}
            />
          )}
          <FormControl
            sx={{
              m: 1,
              width: '40ch',
              mb: 4,
            }}
            variant='outlined'
            required
          >
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
              required
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <MyButton width='47ch'>{name === 'login' ? 'login' : 'registration'}</MyButton>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default DefForm;
