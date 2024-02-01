import RegistrationForm from '../components/RegistrationForm/RegistrationForm.tsx';
import AuthLayout from '../layouts/AuthLayout.tsx';
import { FC } from 'react';

const RegistrationPage: FC = () => {
  return (
    <AuthLayout isLogin={false}>
      <RegistrationForm />
    </AuthLayout>
  );
};

export default RegistrationPage;
