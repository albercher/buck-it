import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import RecentPin from "./RecentPin";
import RecentActivity from "./RecentActivity";

import { useEffect } from "react";

function Explore({
  publicPins,
  publicActivities,
  setPublicActivities,
  setPublicPins,
}) {
  useEffect(() => {
    fetch("/pins")
      .then((response) => response.json())
      .then((data) => setPublicPins(data));
  }, []);

  useEffect(() => {
    fetch("/activities")
      .then((response) => response.json())
      .then((data) => setPublicActivities(data));
  }, []);

  return (
    <Box sx={{ marginTop: "75px", px: "15px" }}>
      <Typography gutterBottom variant="h4">
        Recent Buckits
      </Typography>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        sx={{ paddingBottom: "30px" }}
      >
        {publicPins.map((info, index) => (
          <RecentPin key={index} info={info} />
        ))}
      </Grid>
      <Typography gutterBottom variant="h4">
        Recent Activities
      </Typography>
      <Grid container spacing={1} justifyContent={"center"}>
        {publicActivities.map((info, index) => (
          <RecentActivity key={index} info={info} />
        ))}
      </Grid>
    </Box>
  );
}

export default Explore;
