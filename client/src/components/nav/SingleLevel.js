import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NavLink } from "react-router-dom";

function SingleLevel({ item }) {
    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
      };
  return (
    <NavLink style={linkStyle} to={item.link}>
      <ListItem button>
        <ListItemIcon sx={{ minWidth: "30px", paddingRight: "15px" }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </NavLink>
  );
}

export default SingleLevel