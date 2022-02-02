import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import SortChip from "./SortChip";

function SortBuckits({ handleSort }) {
  const sortMethods = ["Name", "Place"];

  return (
    <Toolbar sx={{ margin: "auto", justifyContent: "center" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {sortMethods.map((sort) => (
          <SortChip
            key={sortMethods.indexOf(sort)}
            name={sort}
            handleSort={handleSort}
          />
        ))}
      </Stack>
    </Toolbar>
  );
}

export default SortBuckits;
