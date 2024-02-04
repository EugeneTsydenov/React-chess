import { FormValues } from '../../models/IForm.ts';
import { useAuth } from '../../hooks/useAuth.ts';
import DefFrom from '../DefForm/DefFrom.tsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const LoginForm: React.FC = observer(() => {
  const { login } = useAuth();

  async function handleSubmit(data: FormValues): Promise<void> {
    login.mutate(data);
  }

  return <DefFrom method={handleSubmit} name='login' />;
});

export default LoginForm;
