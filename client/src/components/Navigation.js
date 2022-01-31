import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SidebarItem from "./SidebarItem";
import UserMenu from "./UserMenu";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Map from "./Map";

import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";

const drawerWidth = 175;

// Navigation Array
const navList = [
  { name: "Home", icon: <HomeOutlinedIcon />, link: "/" },
  { name: "Favorites", icon: <FavoriteBorderOutlinedIcon />, link: "/" },
  { name: "Map", icon: <MapOutlinedIcon />, link: "/map" },
  { name: "My Buck-Its", icon: <RoomOutlinedIcon />, link: "/mybuckits" },
];

function Navigation({ window, currentUser, setCurrentUser }) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Used to access child imperatively
  // from docs: Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
  const geocoderContainerRef = useRef();

  const drawer = (
    // Navigation
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navList.map((item) => (
          <SidebarItem
            key={item.name}
            text={item.name}
            icon={item.icon}
            to={item.link}
          />
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Buck-It
          </Typography>
          {currentUser ? (
            <UserMenu currentUser={currentUser} setCurrentUser={setCurrentUser} />
          ) : (
            <Button variant="text" color="inherit" href="/signin">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {/* place contents here */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navigation;
