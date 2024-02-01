import styles from './OfflineChessPage.module.css';
import Layout from '../../../layouts/Layout.tsx';
import { FC } from 'react';

const OfflineChessPage: FC = () => {
  return (
    <Layout>
      <main>
        <section className={styles.Section}>
          <div className='container'>WrapperBoard</div>
        </section>
      </main>
    </Layout>
  );
};

export default OfflineChessPage;
