import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import SortChip from "./SortChipAct";

function SortActivities({ activities, setActivities }) {
  const sortMethods = ["Name", "Completed"];

  function handleSort(e) {
    let sorted = [];
    if (e === "Name") {
      sorted = activities.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    } else if (e === "Completed") {
      sorted = activities.sort((a, b) => a.completed - b.completed);
    }
    setActivities([...sorted]);
  }

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

export default SortActivities;
