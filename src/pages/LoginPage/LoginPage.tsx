import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import Layout from "../../layouts/Layout.tsx";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";

const LoginPage:FC = () => {
	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		const header = document.querySelector('.header');
		if (header) {
			const height = header.clientHeight;
			setHeaderHeight(height);
		}
	}, []);

	return (
		<Layout>
			<main className='main'>
				<section className='login'>
					<Container maxWidth='lg'>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
								gap: '10px',
								minHeight: `calc(100vh - ${headerHeight}px)`,
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									padding: '15px 20px',
									borderRadius: '15px',
									backgroundColor: 'primary.light'
								}}
							>
								<Typography
									component='h1'
									variant='h4'
									color='primary.contrastText'
									mb={4}
								>
									Authorization
								</Typography>
								<LoginForm/>
								<Box
									sx={{
										display: 'flex',
										width: '100%',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}
								>
									<Link to='/registration'>
										Don't have an account?
									</Link>
									<Link to='/#'>
										Forgot your password?
									</Link>
								</Box>
							</Box>
						</Box>
					</Container>
				</section>
			</main>
		</Layout>
	);
};

export default LoginPage;