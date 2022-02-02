import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SortBuckits from "./sort/SortBuckits";
import Buckit from "./Buckit";

import { useState } from "react";

function MyBuckits({ pins, setPins }) {

  // const [sort, setSort] = useState("");
  // function handleSort(e){
  //   // console.log(e);
  //   // setSort(e);
  //   if(e === "Name"){
  //     // console.log("set to name")
  //     let sorted = pins.sort((a,b) => {
  //       if(a.name < b.name) { return -1; }
  //       if(a.name > b.name) { return 1; }
  //       return 0;
  //     })
  //     setPins(sorted)

  //   } else if(e === "Place"){
  //     // console.log("set to place")
  //     let sorted = pins.sort((a,b) => {
  //       if(a.place_name < b.place_name) { return -1; }
  //       if(a.place_name > b.place_name) { return 1; }
  //       return 0;
  //     })
  //     setPins(sorted)
  //   }
  //   // console.log(sorted)
  //   // setPins(sort)
  // };

  return (
    <Box sx={{ marginTop: "60px"}}>
      <SortBuckits pins={pins} setPins={setPins} />
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        sx={{ px: "15px" }}
      >
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
