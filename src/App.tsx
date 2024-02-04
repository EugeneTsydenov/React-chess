import { authLocalStorageHelper } from './helpers/authLocalStorageHelper.ts';
import AppRouter from './route/AppRouter.tsx';
import { useAuth } from './hooks/useAuth.ts';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import './styles/App.css';

const App: React.FC = observer(() => {
  console.log(1);
  const { refresh } = useAuth();

  const { checkAuth } = authLocalStorageHelper();
  const isAuth = checkAuth();

  React.useEffect(() => {
    if (isAuth) {
      refresh.mutate({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRouter />;
});

export default App;
