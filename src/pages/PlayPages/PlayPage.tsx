import Layout from '../../layouts/Layout.tsx';
import { Navigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { gameStore } from '../../store/gameStore.ts';
import { observer } from 'mobx-react-lite';

const PlayPage: React.FC = observer(() => {
  const params = useParams();

  if(params.id !== gameStore.roomId) {
    return <Navigate to='/'/>
  }

  return (
    <Layout>
      <main>Play</main>
    </Layout>
  );
});

export default PlayPage;
