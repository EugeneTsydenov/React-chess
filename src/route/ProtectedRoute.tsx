import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

interface ProtectedRouteProps {
  isAuth: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
