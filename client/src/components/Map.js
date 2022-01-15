import { useState } from "react";
import ReactMapGL from 'react-map-gl';

import styled from 'styled-components';



// solution for map fitting screen and being responsive
const StyledMap = styled(ReactMapGL)`
  z-index: 0;
`;

function Map() {
  const [viewport, setViewport] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14
  });
  console.log(viewport)
  return (
    // <ReactMapGL mapboxApiAccessToken={MAPBOX_TOKEN} {...viewport} width="100vw" height="100vh" onViewportChange={setViewport} />
    <StyledMap
    {...viewport}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    width="100%"
    height="100vh"
    onViewportChange={(viewport) => setViewport(viewport)}
    mapboxApiAccessToken={MAPBOX_TOKEN}
  >
  </StyledMap>
    );
}

export default Map;
