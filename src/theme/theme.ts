import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1d1d21',
      light: '#262626',
      dark: '#000',
      contrastText: '#d9d2d2',
    },
    secondary: {
      main: '#ffdf71',
      dark: '#f8e18d',
      light: '#dab83d',
      contrastText: '#d9d2d2'
    }
  },
  typography: {
    fontFamily: 'NotoSansRegular, sans-serif',
  }
})

export const inputTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffdf71',
      dark: '#f8e18d',
      light: '#dab83d',
      contrastText: '#d9d2d2'
    },
    secondary: {
      main: '#589645',
      light: '#8acb77',
      dark: '#34791f',
    }
  },
})