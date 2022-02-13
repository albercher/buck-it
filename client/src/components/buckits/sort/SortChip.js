import Chip from "@mui/material/Chip";

function SortChip( { name, handleSort } ) {
  return (
    <Chip
      label={name}
      color="secondary"
      size="small"
      onClick={() => handleSort(name)}
      sx={{
        "&:hover": {
          backgroundColor: "secondary.light",
        },
      }}
      className="wiggle"
    />
  );
}

export default SortChip;
