import { useState } from "react";
import ReactMapGL from "react-map-gl";

import styled from "styled-components";

const MAPBOX_TOKEN = "";

// solution for map fitting screen and being responsive
const StyledMap = styled(ReactMapGL)`
  z-index: 0;
`;

function Map() {
  const [viewport, setViewport] = useState({
    longitude: 10,
    latitude: 90,
    zoom: 1,
  });
  console.log(viewport);
  return (
    <StyledMap
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      width="100%"
      height="100vh"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    ></StyledMap>
  );
}

export default Map;
