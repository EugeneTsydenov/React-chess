import {FC, useContext, useEffect} from "react";
import './styles/App.css';
import AppRouter from "./route/AppRouter.tsx";
import {Context} from "./main.tsx";
import {observer} from "mobx-react-lite";


const App: FC =() => {
  const {store} = useContext(Context)

  useEffect( () => {
    if(localStorage.getItem('accessToken')) {
      store.checkAuth()
    }
  }, [])

  return (
    <AppRouter/>
  );
};

export default observer(App)