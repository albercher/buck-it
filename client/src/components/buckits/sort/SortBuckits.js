import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import SortChip from "./SortChip";

function SortBuckits({ pins, setPins }) {
  const sortMethods = ["Name", "Place"];

  function handleSort(e){
    let sorted = [];
    if(e === "Name"){
      sorted = pins.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    } else if(e === "Place"){
      sorted = pins.sort((a,b) => {
        if(a.place_name < b.place_name) { return -1; }
        if(a.place_name > b.place_name) { return 1; }
        return 0;
      })
    }
    setPins([...sorted])
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

export default SortBuckits;
