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
  const [currentUser, setCurrentUser] = useState(null);
  const [pins, setPins] = useState([])

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setPins(user.pins);
        });
      }
    });
  }, []);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
            <Route path="map" element={<Map pins={pins} setPins={setPins} currentUser={currentUser} />} />
          </Route>
          <Route path="/signin" element={<SignIn setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
