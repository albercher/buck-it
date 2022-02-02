import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { memo } from "react";

function PinInfo({ info }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* {info.name ? <Typography variant="h6">{info.name}</Typography> : null}
      {info.description ? (
        <Typography
          variant="body1"
          // handle text overflow 
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {info.description}
        </Typography>
      ) : null} */}
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
