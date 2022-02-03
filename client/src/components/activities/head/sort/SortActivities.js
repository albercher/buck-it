import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import SortChip from "./SortChip";

function SortActivities({ activities, setActivities }) {
  const sortMethods = ["Name", "Completed"];

  function handleSort(e){
    let sorted = [];
    if(e === "Name"){
      sorted = activities.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    } else if(e === "Completed"){
      sorted = activities.sort((a,b) => {
        return (a === b)? 0 : a? -1 : 1;
      })
    }
    setActivities([...sorted])
  };

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
