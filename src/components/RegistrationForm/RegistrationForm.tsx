import { FormValues } from '../../models/IForm.ts';
import { useAuth } from '../../hooks/useAuth.ts';
import DefFrom from '../DefForm/DefFrom.tsx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const RegistrationForm: React.FC = observer(() => {
  const { registration } = useAuth();

  async function handleSubmit(data: FormValues): Promise<void> {
    registration.mutate(data);
  }

  return <DefFrom method={handleSubmit} name='registration' />;
});

export default RegistrationForm;
