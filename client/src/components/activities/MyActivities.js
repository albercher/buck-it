import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Activity from "./Activity"
import ActivityHeading from "./head/ActivityHeading";
import NewActivity from "./NewActivity";

import { useState } from "react";

function MyActivities( { activities, setActivities } ) {

  const [newActivity, setNewActivity] = useState(false)

  return (
    <Box sx={{ marginTop: "60px", px: "15px" }}>
      <ActivityHeading activities={activities} setActivities={setActivities} newActivity={newActivity} setNewActivity={setNewActivity} />
      {newActivity ? <NewActivity /> : null}
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px" }}>
        {activities.map((activity, key) => <Activity key={key} activity={activity} />)}
      </Grid>
    </Box>
  );
}

export default MyActivities;
