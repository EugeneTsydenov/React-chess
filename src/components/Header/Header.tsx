import NavBar from '../NavBar/Navbar.tsx';
import searchLoop from '../../assets/searchLoop.svg';
import settings from '../../assets/settings.svg';
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {FC} from "react";


const Header: FC = () => {

  return (
    <header className={styles.Header}>
      <div className='container-fluid'>
        <div className={styles.Header__wrapper}>
          <div className={styles.HeaderLeftWrapper}>
            <Link to='/'>
              <h1 className={styles.Logo}>
                ChessHub
              </h1>
            </Link>
            <NavBar/>
          </div>
          <div className={styles.HeaderRightWrapper}>
            <div className={styles.HeaderBtnWrapper}>
              <button>
                <img className={styles.Header__img} src={searchLoop} alt="SearchLoop"/>
              </button>
              <button>
                <img className={styles.Header__img} src={settings} alt="Settings"/>
              </button>
            </div>
            <Link to='/login'>
              <span className={styles.Header__login}>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;