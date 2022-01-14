import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NavLink } from "react-router-dom"

function SidebarItem( { icon, text, to } ) {
  return (
    <NavLink to={to}>
        <ListItem button>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
    </NavLink>
  );
}

export default SidebarItem;
