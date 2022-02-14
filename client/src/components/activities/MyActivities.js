import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";

import Activity from "./Activity";
import ActivityHeading from "./head/ActivityHeading";
import NewActivity from "./NewActivity";

import { useState } from "react";

function MyActivities({ activities, setActivities, currentUser }) {
  const [newActivity, setNewActivity] = useState(false);

  return (
    <Box sx={{ marginTop: "60px", px: "15px" }}>
      <ActivityHeading
        activities={activities}
        setActivities={setActivities}
        newActivity={newActivity}
        setNewActivity={setNewActivity}
      />
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        sx={{ px: "15px", paddingBottom: "8px" }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Collapse in={newActivity}>
            <NewActivity
              currentUser={currentUser}
              setActivities={setActivities}
              activities={activities}
              setNewActivity={setNewActivity}
            />
          </Collapse>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px" }}>
        {activities.map((activity, index) => (
          <Activity
            key={index}
            index={index}
            activity={activity}
            activities={activities}
            setActivities={setActivities}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default MyActivities;
