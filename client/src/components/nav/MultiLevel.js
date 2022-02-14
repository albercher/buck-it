import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import List from "@mui/material/List";

import SidebarItem from "./SidebarItem";

import { useState } from "react";

function MultiLevel({ item }) {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: "30px", paddingRight: "15px" }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ paddingLeft: "10px" }}>
          {children.map((child, key) => (
            <SidebarItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default MultiLevel;
