import {
  Box,
  Button,
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
import { useForm } from 'react-hook-form';
import { FC, useState } from 'react';

interface DefFormProps {
  method: (data: {
    email: string;
    username?: string | undefined;
    password: string;
  }) => Promise<void>;
  name: 'login' | 'registration';
}

const DefForm: FC<DefFormProps> = ({ method, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

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
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            sx={{
              width: '47ch',
              mb: '25px',
            }}
          >
            Login
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default DefForm;
