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
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";

import SidebarItem from "./SidebarItem";
import UserMenu from "./UserMenu";

import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";

const drawerWidth = 175;

// Navigation Array
const navList = [
  { title: "Explore", icon: <ExploreOutlinedIcon />, link: "/", items: [] },
  {
    title: "Buck-Its",
    icon: <RoomOutlinedIcon />,
    link: "/mybuckits",
    items: [],
  },
  {
    title: "Activities",
    icon: <LibraryAddCheckOutlinedIcon />,
    link: "/myactivities",
    // items: [
    //   {
    //     title: "Incomplete",
    //     icon: <CheckBoxOutlineBlankOutlinedIcon />,
    //     link: "/myactivities"
    //   },
    //   {
    //     title: "Complete",
    //     icon: <CheckBoxOutlinedIcon />,
    //     link: "/myactivities"
    //   },
    // ],
  },
  { title: "Map", icon: <MapOutlinedIcon />, link: "/map", items: [] },
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
        {navList.map((item, key) => (
          <SidebarItem key={key} item={item} />
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
        // elevation={0}
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
          <Box component="div" noWrap>
            <Typography variant="h6" className="waviy">
              Buck-It,
              <span> </span>
              <span style={{"--i":1}}>l</span>
              <span className="--i:2" style={{"--i":2}}>e</span>
              <span className="--i:3" style={{"--i":3}}>t</span>
              <span className="--i:4" style={{"--i":4}}>'</span>
              <span className="--i:5" style={{"--i":5}}>s</span>
              <span> </span>
              <span className="--i:7" style={{"--i":6}}>g</span>
              <span className="--i:8" style={{"--i":7}}>o</span>
            </Typography>
          </Box>
          {currentUser ? (
            <UserMenu
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
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
        aria-label="links"
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
          // marginTop: "56px"
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
