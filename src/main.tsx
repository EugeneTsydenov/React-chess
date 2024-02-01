import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.ts';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';
import Store from './store/store.ts';
import './styles/base/fonts.css';
import App from './App.tsx';
import './index.css';

interface State {
  store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
  store,
});

// const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider
    value={{
      store,
    }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Context.Provider>,
);
