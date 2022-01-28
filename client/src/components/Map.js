import { useState, useCallback, useRef } from "react";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder';

const MAPBOX_TOKEN = ""

function Map( { geocoderContainerRef } ) {
  const [viewport, setViewport] = useState({
    longitude: 10,
    latitude: 90,
    zoom: 1,
  });

  // Used to access child imperatively
  // from docs: Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
  const mapRef = useRef();

  // Returns memoized callback (for optimization),stores results of expensive function calls
  // ? not sure why this is "expensive", would like to research more
  // from docs: will return a memoized version of the callback that only changes if one of the dependencies has changed
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const fullscreenControlStyle = {
    top: 70,
    left: 0,
    padding: '10px'
  };


const navStyle = {
  top: 110,
  left: 0,
  padding: '10px'
};


  return (
    <MapGL
      {...viewport}
      ref={mapRef}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      width="100%"
      height="100vh"
      onViewportChange={handleViewportChange}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />

        <FullscreenControl style={fullscreenControlStyle}  />
        <NavigationControl style={navStyle} />
    </MapGL>
  );
}

export default Map;
