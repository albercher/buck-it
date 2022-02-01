import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SortBuckits from "./SortBuckits";
import Buckit from "./Buckit";

function MyBuckits({ pins, setPins }) {


  return (
    <Box sx={{ marginTop: "60px"}}>
      <SortBuckits />
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
