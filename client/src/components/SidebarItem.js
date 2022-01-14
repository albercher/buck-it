import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NavLink } from "react-router-dom";

function SidebarItem({ icon, text, to }) {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <NavLink style={linkStyle} to={to}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </NavLink>
  );
}

export default SidebarItem;
