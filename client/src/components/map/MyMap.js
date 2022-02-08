import { useState, useCallback, useRef } from "react";
import Map, {
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";

import Pin from "./Pin";
import PinInfo from "./PinInfo";

const MAPBOX_TOKEN = process.env.REACT_APP_API_KEY;

function MyMap({ pins, setPins, currentUser }) {
  const [viewport, setViewport] = useState({
    longitude: 10,
    latitude: 90,
    zoom: 1,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  // Used to access child imperatively
  // from docs: Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
  const mapRef = useRef();

  // Returns memoized callback (for optimization),stores results of expensive function calls
  // ? not sure why this is "expensive", would like to research more
  // from docs: will return a memoized version of the callback that only changes if one of the dependencies has changed
  // const handleViewportChange = useCallback(
  //   (newViewport) => setViewport(newViewport),
  //   []
  // );

  const fullscreenControlStyle = {
    top: 70,
    left: 0,
    padding: "10px",
  };

  const navStyle = {
    top: 110,
    left: 0,
    padding: "10px",
  };

  function handleAddPin(result) {
    let newPinData = {
      place_name: result.place_name,
      latitude: result.geometry.coordinates[1],
      longitude: result.geometry.coordinates[0],
      user_id: currentUser,
    };
    fetch("/pins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPinData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPins([...pins, data]);
        setPopupInfo(data);
      });
  }

  return (
    <Map
      {...viewport}
      ref={mapRef}
      mapStyle="mapbox://styles/mapbox/light-v9"
      style={{ width: "100%", height: "100vh"}}
      // width="100%"
      // height="100vh"
      // onViewportChange={handleViewportChange}
      mapboxAccessToken={MAPBOX_TOKEN}
      onMove={evt => setViewport(evt.viewState)}

    >
      {/* <Geocoder
        mapRef={mapRef}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        position="bottom-right"
        onResult={(result) => {
          handleAddPin(result.result);
        }}
      /> */}

      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle} />

      <Pin data={pins} 
      // onClick={setPopupInfo} 
      />
      {/* {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={setPopupInfo}
          dynamicPosition={false}
        >
          <PinInfo info={popupInfo} />
        </Popup>
      )} */}
    </Map>
  );
}

export default MyMap;
