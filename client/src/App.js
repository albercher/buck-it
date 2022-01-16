import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

//Mapbox Geocoder CSS
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

// Mapbox css
import 'mapbox-gl/dist/mapbox-gl.css';
// ? might be able to get rid of styled components

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
