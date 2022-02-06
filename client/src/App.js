import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navigation from "./components/nav/Navigation";
import Map from "./components/map/Map";
import MyBuckits from "./components/buckits/MyBuckits";
import MyActivities from "./components/activities/MyActivities";
import Explore from "./components/explore/Explore";

import "./App.css";

//Mapbox Geocoder CSS
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// Mapbox css
import "mapbox-gl/dist/mapbox-gl.css";
// ? might be able to get rid of styled components

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#344955",
      light: "#4A6572",
      dark: "#232F34",
    },
    secondary: {
      main: "#f9aa33",
    },
    background: {
      default: "#EDF0F2",
    },
  },
  typography: {
    fontFamily: "Work Sans",
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: "25px",
          minWidth: "100px",
        },
        color: "secondary",
      },
    },
    // MuiChip: {
    //   defaultProps: {
    //     sx
    //   }
    // }
  },
});

function App() {
  const [currentUser, setCurrentUser] = useState(0);
  const [pins, setPins] = useState([]);
  const [activities, setActivities] = useState([]);
  const [publicPins, setPublicPins] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user.id);
          setPins(user.pins);
          setActivities(user.activities);
        })
      }
    });
  }, []);

  useEffect(() => {
    fetch('/pins')
    .then(response => response.json())
    .then(data => setPublicPins(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navigation
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          >
            <Route
              path="map"
              element={
                <Map pins={pins} setPins={setPins} currentUser={currentUser} />
              }
            />
            <Route
              path="mybuckits"
              element={<MyBuckits pins={pins} setPins={setPins} />}
            />
            <Route
              path="myactivities"
              element={<MyActivities activities={activities} setActivities={setActivities} currentUser={currentUser} />}
            />
             <Route
              path="/"
              element={<Explore publicPins={publicPins} />}
            />
          </Route>
          <Route
            path="/signin"
            element={<SignIn setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/signup"
            element={<SignUp setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
