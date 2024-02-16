import LoginForm from '../../components/login-form/LoginForm.tsx';
import AuthLayout from '../../layouts/AuthLayout.tsx';
import * as React from 'react';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout isLogin={true}>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
