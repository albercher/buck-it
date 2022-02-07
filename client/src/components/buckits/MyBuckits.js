import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SortBuckits from "./sort/SortBuckits";
import Buckit from "./Buckit";

import { useState } from "react";

function MyBuckits({ pins, setPins }) {

  return (
    <Box sx={{ marginTop: "60px"}}>
      <SortBuckits pins={pins} setPins={setPins} />
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        sx={{ px: "15px" }}
      >
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
