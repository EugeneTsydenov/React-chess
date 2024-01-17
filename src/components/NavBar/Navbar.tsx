import styles from './NavBar.module.css'
import {links} from "../../data/NavLinks.js";
import {Links} from "../../models/Links.tsx";
import NavBarItem from "../NavBarItem/NavBarItem.tsx";
import {FC} from "react";

const NavBar:FC = () => {
  return (
    <nav>
      <ul className={styles.List}>
        {
          links.map((link: Links, i: number) => {
            return (
              <NavBarItem
                link={link}
                key={i}
              />
            )
          })
        }
      </ul>
    </nav>
  );
};

export default NavBar;