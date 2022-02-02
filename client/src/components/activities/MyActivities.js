import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Activity from "./Activity";

function MyActivities() {
  return (
    <Box sx={{ marginTop: "60px", px: "15px", paddingTop: "20px"}}>
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px" }}>
        <Activity />
      </Grid>
    </Box>
  );
}

export default MyActivities;
