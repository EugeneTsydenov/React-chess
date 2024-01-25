import {FC} from "react";
import Layout from "../../layouts/Layout.tsx";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import styles from './LoginPage.module.css'
import {Link} from "react-router-dom";

const LoginPage:FC = () => {
	return (
		<Layout>
			<main className='main'>
				<section>
					<div className='container'>
						<div className={styles.Wrapper}>
							<div className={styles.Inner}>
								<h1 className={styles.Title}>Authorization</h1>
								<LoginForm/>
								<div className={styles.WrapperBot}>
									<Link to='/registration'>
										Already have an account?
									</Link>
									<Link to='/#'>
										Forgot your password?
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default LoginPage;