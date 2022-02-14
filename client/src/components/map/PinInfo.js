import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { memo } from "react";

function PinInfo({ info }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6">
        {info.place_name}
      </Typography>
      <Typography variant="overline" color="#6d6d6d">
        {info.latitude}, {info.longitude}
      </Typography>
    </Box>
  );
}

export default memo(PinInfo);
