import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import DefFrom from '../DefForm/DefFrom.tsx';
import { Context } from '../../main.tsx';

const RegistrationForm: FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { store } = useContext(Context);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    await store.registration(email, username, password);
  }

  return (
    <DefFrom method={handleSubmit}>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        required
        sx={{
          width: '40ch',
        }}
        onChange={handleEmail}
      />
      <TextField
        id='outlined-basic'
        label='Username'
        variant='outlined'
        required
        sx={{
          width: '40ch',
        }}
        onChange={handleUsername}
      />
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
          value={password}
          onChange={handlePassword}
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
    </DefFrom>
  );
};

export default RegistrationForm;
