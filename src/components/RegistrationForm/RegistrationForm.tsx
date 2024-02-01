import { FormValues } from '../../models/IForm.ts';
import DefFrom from '../DefForm/DefFrom.tsx';
import { Context } from '../../main.tsx';
import { FC, useContext } from 'react';

const RegistrationForm: FC = () => {
  const { store } = useContext(Context);

  async function handleSubmit(data: FormValues): Promise<void> {
    await store.registration(data.email, data?.username || '', data.password);
  }

  return <DefFrom method={handleSubmit} name='registration' />;
};

export default RegistrationForm;
