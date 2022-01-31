import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { HTMLOverlay } from "react-map-gl";

import { memo } from "react";

function AddPin() {
  return (
        <div id="addpin">
              <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1},
                    }}
                    noValidate
                    autoComplete="off">
                  <Typography variant="subtitle1">Create New Pin</Typography>
                  <TextField id="standard-basic" label="Name" variant="standard" />
                  <TextField id="standard-basic" label="Description" variant="standard" />
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                    //   value={age}
                    //   onChange={handleChange}
                      label="Color"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"red"}>Red</MenuItem>
                      <MenuItem value={"yellow"}>Yellow</MenuItem>
                      <MenuItem value={"green"}>Green</MenuItem>
                      <MenuItem value={"blue"}>Blue</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="body2">Place</Typography>
              </Box>
        </div>
  );
}

export default memo(AddPin);
