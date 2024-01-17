import {FC} from "react";
import Layout from "../../../layouts/Layout.tsx";
import styles from './OfflineChessPage.module.css'

const OfflineChessPage: FC = () => {
	
	return (
		<Layout>
			<main>
				<section className={styles.Section}>
					<div className='container'>
						WrapperBoard
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default OfflineChessPage;