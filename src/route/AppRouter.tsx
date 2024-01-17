import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import PlayPage from '../pages/PlayPages/PlayPage.tsx';
import OnlineChessPage from '../pages/PlayPages/OnlineChessPage.tsx';
import FriendChessPage from '../pages/PlayPages/FriendChessPage.tsx';
import BotChessPage from '../pages/PlayPages/BotChessPage.tsx';
import TaskPage from '../pages/TasksPages/TaskPage.tsx';
import EducationPage from '../pages/EducationPages/EducationPage.tsx';
import ViewingPage from '../pages/ViewingPages/ViewingPage.tsx';
import CommunityPage from '../pages/CommunityPages/CommunityPage.tsx';
import InstrumentsPage from '../pages/InstrumentsPages/InstrumentsPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import RegistrationPage from '../pages/RegistrationPage.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import store from '../store/store.ts';

const AppRouter: FC = observer(() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="play">
          <Route index element={<PlayPage />} />
          <Route element={<ProtectedRoute isAuth={store.isAuth} />}>
            <Route path="online" element={<OnlineChessPage />} />
            <Route path="friend" element={<FriendChessPage />} />
          </Route>
          <Route path="offline" element={<BotChessPage />} />
          <Route path="bot" element={<BotChessPage />} />
        </Route>
        <Route path="tasks" element={<TaskPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="viewing" element={<ViewingPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="instruments" element={<InstrumentsPage />} />
        <Route element={<ProtectedRoute isAuth={!store.isAuth} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Router>
  );
});

export default AppRouter;