import SortActivities from "./sort/SortActivities";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import RemoveIcon from "@mui/icons-material/Remove";
import Collapse from "@mui/material/Collapse";
import Zoom from "@mui/material/Zoom";

function ActivityHeading({
  activities,
  setActivities,
  newActivity,
  setNewActivity,
}) {
  function handleClick() {
    setNewActivity(!newActivity);
  }

  return (
    <Stack direction="row">
      <SortActivities activities={activities} setActivities={setActivities} />
      {newActivity ? (
        <Zoom in={newActivity}>
          <IconButton onClick={handleClick} aria-label="add" className="wiggle">
            <RemoveIcon />
          </IconButton>
        </Zoom>
      ) : null}
      {newActivity ? null : (        <Zoom in={!newActivity}>
        <IconButton onClick={handleClick} aria-label="add" className="wiggle">
          <AddIcon />
        </IconButton>
      </Zoom>)}
    </Stack>
  );
}

export default ActivityHeading;
