import RegistrationForm from '../components/registration-form/RegistrationForm.tsx';
import AuthLayout from '../layouts/AuthLayout.tsx';
import * as React from 'react';

const RegistrationPage: React.FC = () => {
  return (
    <AuthLayout isLogin={false}>
      <RegistrationForm />
    </AuthLayout>
  );
};

export default RegistrationPage;
