import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Buckit from "./Buckit";

function MyBuckits({ pins, setPins }) {
  return (
    <Box sx={{ marginTop: "60px", padding: "20px", flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent={"center"}>
        {pins.map((pin) => (
          <Buckit key={pin.id} info={pin} />
        ))}
      </Grid>
    </Box>
  );
}

export default MyBuckits;
