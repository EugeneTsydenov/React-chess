import {useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavBarItem.module.css'
import {FC} from "react";
import {Links} from "../../models/Links.tsx";
import NavDropDownMenu from "../NavDropDownMenu/NavDropDownMenu.tsx";

interface NavBarItemPropTypes {
	link: Links
}

const NavBarItem:FC<NavBarItemPropTypes> = ({link}) => {
	const [isHovered, setHovered] = useState(false)
	const {title, associatedLinks, path} = link;
	
	function handleMouseEnter() {
		setHovered(true)
	}
	function handleMouseLeave() {
		setHovered(false)
	}
	
	return (
		<li
			className={isHovered ? styles.ItemHover : styles.Item}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
		>
			<NavLink to={path}>
				<p className={styles.Text}>
					{title}
				</p>
			</NavLink>
			<NavDropDownMenu
				associatedLinks={associatedLinks}
				isHovered={isHovered}
			/>
		</li>
	);
};

export default NavBarItem;