import { FormValues } from '../../models/IForm.ts';
import DefFrom from '../DefForm/DefFrom.tsx';
import { Context } from '../../main.tsx';
import { FC, useContext } from 'react';

const LoginForm: FC = () => {
  const { store } = useContext(Context);

  async function handleSubmit(data: FormValues): Promise<void> {
    await store.login(data.email, data.password);
  }

  return <DefFrom method={handleSubmit} name='login' />;
};

export default LoginForm;
