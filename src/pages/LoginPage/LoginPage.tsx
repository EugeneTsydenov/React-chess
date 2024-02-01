import LoginForm from '../../components/LoginForm/LoginForm.tsx';
import AuthLayout from '../../layouts/AuthLayout.tsx';
import { FC } from 'react';

const LoginPage: FC = () => {
  return (
    <AuthLayout isLogin={true}>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
