import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";

function Activity({activity}) {
  const [editInfo, setEditInfo] = useState(false); // determines which version of card to show (form or no form)
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
  });

  // needs to be activity.completed when backend configured
  // TODO: fetch req for updating form and checkbox. might be able to combine
  const [checked, setChecked] = useState(false);

  // show or hide form
  function handleEdit() {
    setEditInfo(!editInfo);
  }

  function handleDelete() {
    // fetch("/pins/" + info.id, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     let filteredArray = pins.filter(pin => pin.id !== info.id);
    //     setPins(filteredArray);
    //   });
  }

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();

    // update on backend
    // fetch("/pins/" + info.id, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editForm),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     // close the form
    //     setEditInfo(!editInfo);

    //     // update pins array with updated pins
    //     let newArr = [...pins];
    //     newArr[index] = data;

    //     setPins(newArr);
    //   });
  }

  function handleCheck(e){
      setChecked(e.target.checked);
  };

  return (
    <Grid item xs={12} sm={10} md={4}>
      <Card variant="outlined" sx={{ borderRadius: "0dp" }}>
        <CardHeader
          avatar={<Checkbox checked={checked} onChange={handleCheck} sx={{ px: "0px" }} />}
          title={<Typography variant="h6">{activity.name}</Typography>}
          action={
            <Box>
              <IconButton size="small" aria-label="edit" onClick={handleEdit}>
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              <IconButton size="small" aria-label="edit" onClick={handleDelete}>
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          }
          sx={{ paddingBottom: "0px" }}
        />
        <CardContent
          sx={{ paddingTop: "5px", "&:last-child": { paddingBottom: "16px" } }}
        >
          {editInfo ? (
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSave}
            >
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    id="standard-basic"
                    fullWidth
                    label="Name"
                    variant="standard"
                    onChange={handleChange}
                    value={editForm.name || ""}
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "15px" }}>
                  <TextField
                    name="description"
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    value={editForm.description || ""}
                    multiline
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "10px"}}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    sx={{ my: "10px" }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Typography>{activity.description}</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Activity;
