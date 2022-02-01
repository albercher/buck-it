import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Toolbar from "@mui/material/Toolbar";

function SortBuckits(){
    function handleClick() {
        console.log("clicked");
      }    

    return(
        <Toolbar sx={{ margin:'auto', justifyContent: 'center' }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Chip
              label="Chip Filled"
              color="secondary"
              size="small"
              onClick={handleClick}
              sx={{
                "&:hover": {
                  backgroundColor: "secondary.light",
                },
              }}
            />
          </Stack>
        </Toolbar>
    )
}

export default SortBuckits