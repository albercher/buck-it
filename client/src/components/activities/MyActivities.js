import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Activity from "./Activity";

import { useEffect } from "react";

function MyActivities( { activities, setActivities } ) {
  // useEffect(() => {
  //   fetch("/").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         setPins(user.pins);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <Box sx={{ marginTop: "60px", px: "15px", paddingTop: "20px"}}>
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px" }}>
        {activities.map((activity, key) => <Activity key={key} activity={activity} />)}
      </Grid>
    </Box>
  );
}

export default MyActivities;
