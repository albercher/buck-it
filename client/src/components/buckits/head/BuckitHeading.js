import SortBuckits from "./sort/SortBuckits";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import RemoveIcon from "@mui/icons-material/Remove";
import Collapse from "@mui/material/Collapse";
import Zoom from "@mui/material/Zoom";

function BuckitHeading({
  pins,
  setPins,
  newBuckit,
  setNewBuckit,
}) {
  function handleClick() {
    setNewBuckit(!newBuckit);
  }

  return (
    <Stack direction="row">
      <SortBuckits pins={pins} setPins={setPins} />
      {newBuckit ? (
        <Zoom in={newBuckit}>
          <IconButton onClick={handleClick} aria-label="add">
            <RemoveIcon />
          </IconButton>
        </Zoom>
      ) : null}
      {newBuckit ? null : (        <Zoom in={!newBuckit}>
        <IconButton onClick={handleClick} aria-label="add">
          <AddIcon />
        </IconButton>
      </Zoom>)}
    </Stack>
  );
}

export default BuckitHeading;
