import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { memo } from "react";

function PinInfo({ info }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      {info.name ? <Typography>{info.name}</Typography> : null}
      {info.description ? <Typography>{info.description}</Typography> : null}
      <Typography variant="body2">{info.place_name}</Typography>
      <Typography variant="overline">
        {info.latitude}, {info.longitude}
      </Typography>
    </Box>
  );
}

export default memo(PinInfo);
