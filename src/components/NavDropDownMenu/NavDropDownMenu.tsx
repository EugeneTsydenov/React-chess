import {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './NavDropDownMenu.module.css'
import {LinkType} from "../../models/Links.tsx";

interface NavDropDownMenuPropTypes {
  associatedLinks: LinkType[];
  isHovered: boolean
}

const NavDropDownMenu: FC<NavDropDownMenuPropTypes> = ({associatedLinks, isHovered}) => {
  return (
    <ul className={isHovered ? styles.ListFlex : styles.ListNone}>
      {
        associatedLinks.map((link, index) => {
          return (
            <li
              key={link.path + index}
              className={styles.Item}
            >
              <Link to={link.path}>
								<span className={styles.Text}>
									{link.title}
								</span>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default NavDropDownMenu;