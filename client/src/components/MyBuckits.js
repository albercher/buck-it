import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Buckit from "./Buckit";

function MyBuckits({ pins, setPins }) {
  return (
    <Box sx={{ marginTop: "60px", padding: "20px", flexGrow: 1 }}>
      <Grid container spacing={1} justifyContent={"center"}>
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
