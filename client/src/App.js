import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import Map from "./components/Map";

import './App.css'


//Mapbox Geocoder CSS
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

// Mapbox css
import 'mapbox-gl/dist/mapbox-gl.css';
// ? might be able to get rid of styled components

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  // if (!isAuthenticated) {
  //   return <div></div>;
  // }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="map" element={<Map />} />
          </Route>
          <Route path="/signin" element={<SignIn setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
