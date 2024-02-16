import InstrumentsPage from '../pages/instruments-page/InstrumentsPage.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EducationPage from '../pages/education-pages/EducationPage.tsx';
import CommunityPage from '../pages/community-pages/CommunityPage.tsx';
import OnlineChessPage from '../pages/PlayPages/OnlineChessPage.tsx';
import FriendChessPage from '../pages/PlayPages/FriendChessPage.tsx';
import ViewingPage from '../pages/viewing-pages/ViewingPage.tsx';
import BotChessPage from '../pages/PlayPages/BotChessPage.tsx';
import RegistrationPage from '../pages/RegistrationPage.tsx';
import LoginPage from '../pages/login-page/LoginPage.tsx';
import TaskPage from '../pages/tasks-pages/TaskPage.tsx';
import PlayPage from '../pages/PlayPages/PlayPage.tsx';
import { authStore } from '../store/auth-store.ts';
import ProtectedRoute from './ProtectedRoute.tsx';
import HomePage from '../pages/HomePage.tsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const AppRouter: React.FC = observer(() => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='play'>
          <Route index element={<PlayPage />} />
          <Route element={<ProtectedRoute isAuth={authStore.isAuth} />}>
            <Route path='online' element={<OnlineChessPage />} />
            <Route path='friend' element={<FriendChessPage />} />
          </Route>
          <Route path='offline' element={<BotChessPage />} />
          <Route path='bot' element={<BotChessPage />} />
        </Route>
        <Route path='tasks' element={<TaskPage />} />
        <Route path='education' element={<EducationPage />} />
        <Route path='viewing' element={<ViewingPage />} />
        <Route element={<ProtectedRoute isAuth={authStore.isAuth} />}>
          <Route path='game/:id' element={<PlayPage />} />
        </Route>
        <Route path='community' element={<CommunityPage />} />
        <Route path='instruments' element={<InstrumentsPage />} />
        <Route element={<ProtectedRoute isAuth={!authStore.isAuth} />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Router>
  );
});

export default AppRouter;
