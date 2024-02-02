import { FC, useContext, useEffect } from 'react';
import AppRouter from './route/AppRouter.tsx';
import { Context } from './main.tsx';
import './styles/App.css';

const App: FC = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      store.checkAuth();
    }
  }, []);

  return <AppRouter />;
};

export default App;
