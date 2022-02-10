import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function BuckitPin({ order, info, stops, setStops }) {
  // TODO: Add condition if first or last child to not show up/down button
  return (
    <ListItem>
      <ListItemText primary={info.place_name} />
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
      <IconButton>
        <KeyboardArrowUpIcon />
      </IconButton>
      <IconButton>
        <ClearOutlinedIcon />
      </IconButton>
    </ListItem>
  );
}

export default BuckitPin;
