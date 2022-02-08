import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";

import BuckitHeading from "./head/BuckitHeading";
// import SortBuckits from "./head/sort/SortBuckits";
import Buckit from "./Buckit";
import NewBuckit from "./NewBuckit";

import { useState } from "react";

const GEOCODE_KEY = process.env.REACT_APP_GEOCODE_API_KEY;


function MyBuckits({ pins, setPins, currentUser }) {
  const [newBuckit, setNewBuckit] = useState(false);

  return (
    <Box sx={{ marginTop: "60px" }}>
      <BuckitHeading
        pins={pins}
        setPins={setPins}
        newBuckit={newBuckit}
        setNewBuckit={setNewBuckit}
      />
      {/* <SortBuckits pins={pins} setPins={setPins} /> */}
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px", paddingBottom: "8px" }}>
        <Grid item xs={12} sm={10} md={6}>
          <Collapse in={newBuckit}>
            <NewBuckit
              currentUser={currentUser}
              setPins={setPins}
              pins={pins}
              setNewBuckit={setNewBuckit}
              apiKey={GEOCODE_KEY}
            />
          </Collapse>
        </Grid>
        </Grid>
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px" }}>
        {pins.map((pin, index) => (
          <Buckit
            key={pin.id}
            info={pin}
            setPins={setPins}
            pins={pins}
            index={index}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default MyBuckits;
