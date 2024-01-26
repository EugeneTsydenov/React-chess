import {FC} from 'react';
import {Link} from "react-router-dom";
import {MenuItem, MenuList, Typography} from "@mui/material";
import {LinkType} from "../../models/Links.ts";

interface NavDropDownMenuPropTypes {
  associatedLinks: LinkType[];
  isHovered: boolean
}

const NavDropDownMenu: FC<NavDropDownMenuPropTypes> = ({associatedLinks, isHovered}) => {
  return (
    <MenuList
      sx={{
        position: 'absolute',
        top: '100%',
        left: '0',
        display: isHovered ? 'flex' : 'none',
        flexDirection: 'column',
        width: '170px',
        zIndex: '2',
        backgroundColor: 'primary.light'
      }}
    >
      {
        associatedLinks.map((link, index) => {
          return (
            <MenuItem
              key={link.path + index}
              sx={{
                padding: '10px 15px',
              }}
            >
              <Link to={link.path}>
								<Typography
                  sx={{
                    fontSize: '16px',
                    opacity: '.8',
                    transition: 'all .3s ease',
                    '&:hover': {
                      color: 'secondary.main'
                    }
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            </MenuItem>
          )
        })
      }
    </MenuList>
  );
};

export default NavDropDownMenu;