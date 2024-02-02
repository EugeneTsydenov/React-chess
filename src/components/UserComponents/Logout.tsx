import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { Context } from '../../main.tsx';
import { FC, useContext } from 'react';

interface LogoutProps {
  setting: string;
}

const Logout: FC<LogoutProps> = ({ setting }) => {
  const { store } = useContext(Context);

  return (
    <button
      type='submit'
      onClick={async () => {
        await store.logout();
      }}
    >
      <Typography>{setting}</Typography>
    </button>
  );
};

export default observer(Logout);
