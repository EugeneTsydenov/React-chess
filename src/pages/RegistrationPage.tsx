import {ChangeEvent, FC, FormEvent, useContext, useState} from "react";
import {Context} from "../main.tsx";
import {
  Box, Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {inputTheme} from "../theme/theme.ts";
import Layout from "../layouts/Layout.tsx";


const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {store} = useContext(Context);
  console.log(email, password   )
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }


  function handlePassword(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    console.log(email, password)
    event.preventDefault()
    await store.login(email, password)
  }

  return (
    <Layout>
      <ThemeProvider theme={inputTheme}>
        <form method="POST" onSubmit={handleSubmit}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: '10px 15px'
          }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              sx={{
                width: '40ch'
              }}
              onChange={handleEmail}
            />
            <FormControl
              sx={{
                m: 1,
                width: '40ch',
                mb: 4,
              }}
              variant="outlined"
              required
            >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePassword}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              sx={{
                width: '47ch',
                mb: '25px'
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </ThemeProvider>
    </Layout>
  );
};

export default LoginForm;