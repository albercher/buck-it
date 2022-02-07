import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";

function NewActivity({currentUser, activities, setActivities, setNewActivity, newActivity}) {

  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
  });

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }
  function handleSave(e) {
    e.preventDefault();

    const newActData = {
      ...editForm, user_id: currentUser
    }

    fetch('/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setActivities([data, ...activities]);
        setNewActivity(false);
        setEditForm({...editForm, name: "", description: ""})
      })
  }

  return (
      <Card variant="outlined" sx={{ borderRadius: "0dp" }}>
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
  );
}

export default NewActivity;
