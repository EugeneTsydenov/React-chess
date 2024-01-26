import { useState, MouseEvent } from 'react';
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { Links } from "../../models/Links.tsx";
import NavDropDownMenu from "../NavDropDownMenu/NavDropDownMenu.tsx";
import { Box, Typography } from "@mui/material";

interface NavBarItemPropTypes {
	link: Links;
}

const NavBarItem: FC<NavBarItemPropTypes> = ({ link }) => {
	const [isHovered, setHovered] = useState(false);
	const { title, associatedLinks, path } = link;

	const handleMouseEnter = (e: MouseEvent<HTMLLIElement>) => {
		e.stopPropagation();
		setHovered(true);
	};

	const handleMouseLeave = (e: MouseEvent<HTMLLIElement>) => {
		e.stopPropagation();
		setHovered(false);
	};

	return (
		<Box
			component="li"
			sx={{
				position: 'relative',
				backgroundColor: isHovered ? 'primary.light' : 'transparent',
				padding: '15px'
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<NavLink to={path}>
				<Typography
					component='p'
					sx={{
						fontFamily: 'NotoSansMedium, sans-serif',
						fontSize: '18px',
						opacity: '.6',
						transition: 'all .3s ease',
						'&:hover': {
							color: 'secondary.main'
						}
					}}
				>
					{title}
				</Typography>
			</NavLink>
			<NavDropDownMenu
				associatedLinks={associatedLinks}
				isHovered={isHovered}
			/>
		</Box>
	);
};

export default NavBarItem;
