import { FormValues } from '../../models/IForm.ts';
import DefFrom from '../default-form/DefFrom.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
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
