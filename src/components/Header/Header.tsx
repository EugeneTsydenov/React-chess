import {FC, useContext} from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography
} from "@mui/material";
import NavBar from "../NavBar/Navbar.tsx";
import {Link} from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu.tsx";
import {Context} from "../../main.tsx";
import User from "../User/User.tsx";

const Header: FC = () => {
  const {store} = useContext(Context);

  return (
    <AppBar
      sx={{
        backgroundColor: 'secondary',
        boxShadow: '2px 54px 66px -59px rgba(91, 148, 201, 0.6) inset',
        position: 'relative',
        backgroundImage: 'none',
      }}
      className='header'
    >
      <Container maxWidth="xl">
        <Toolbar sx={{mt: 2}} disableGutters>
          <Link to='/'>
            <Typography
              variant="h4"
              noWrap
              component="h1"
              sx={{
                mr: 12,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'NotoSansExtraBold',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'primary',
                textDecoration: 'none',
              }}
            >
              ChessHub
            </Typography>
          </Link>
          <MobileMenu/>
          <Link to='/'>
            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{
                mr: 30,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'NotoSansExtraBold',
                fontWeight: 700,
                letterSpacing: '.3rem',
                fontSize: '25px',
                color: 'primary',
                textDecoration: 'none',
              }}
            >
              ChessHub
            </Typography>
          </Link>
          <NavBar/>
          {
            store.isAuth ?
              <User/> :
              <Link to='/login'>
                Login
              </Link>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;