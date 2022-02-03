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
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";

function NewActivity({currentUser, activities, setActivities, setNewActivity}) {
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    user_id: currentUser.id
  });

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();

    fetch('/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setActivities([data, ...activities]);
        setNewActivity(false);
      })
  }

  return (
    <Grid item xs={12} sm={10} md={4}>
      <Card variant="outlined" sx={{ borderRadius: "0dp" }}>
        {/* <CardHeader
          avatar={<Checkbox checked={checked} onChange={handleCheck} sx={{ px: "0px" }} />}
          title={<Typography variant="h6">activity name</Typography>}
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
        /> */}
        <CardContent
          sx={{ paddingTop: "5px", "&:last-child": { paddingBottom: "16px" } }}
        >
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
              <Grid item xs={12} sx={{ marginTop: "10px" }}>
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
        </CardContent>
      </Card>
    </Grid>
  );
}

export default NewActivity;
