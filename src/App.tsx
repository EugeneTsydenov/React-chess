import {FC, useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "./main.tsx";
import AppRouter from "./route/AppRouter.tsx";
import './styles/App.css';


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