import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import Store from "./store/store.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.ts";
import App from './App.tsx';
import './styles/base/fonts.css';
import './index.css';

interface State  {
  store: Store
}

export const store = new Store();

export const Context= createContext<State>({
  store,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    store
  }}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </Context.Provider>,
)
