import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";

import Activity from "./Activity";
import ActivityHeading from "./head/ActivityHeading";
import NewActivity from "./NewActivity";
import Zoom from '@mui/material/Zoom';

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
      {/* {newActivity ? <NewActivity /> : null} */}
      <Grid container spacing={1} justifyContent={"center"} sx={{ px: "15px" }}>
        
        <Grid item xs={12} sm={10} md={4}>
<Collapse in={newActivity}>
        <NewActivity
                currentUser={currentUser}
                setActivities={setActivities}
                activities={activities}
                setNewActivity={setNewActivity}
              />
              
        </Collapse></Grid>
        {/* {newActivity ? (
              <NewActivity
                setNewActivity={setNewActivity}
                currentUser={currentUser}
                setActivities={setActivities}
                activities={activities}
                newActivity={newActivity}
              />) : null} */}
        {activities.map((activity, key) => (
          <Activity key={key} activity={activity} />
        ))}
      </Grid>
    </Box>
  );
}

export default MyActivities;
