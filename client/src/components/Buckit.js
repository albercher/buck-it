import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// import { HuePicker } from 'react-color'

function Buckit({ info, setPins, pins, index }) {
  const [editInfo, setEditInfo] = useState(false); // determines which version of card to show (form or no form)
  //   const [hexColor, setHexColor] = useState({hex: "#FF0000"});
  const [editForm, setEditForm] = useState({
    name: info.name,
    description: info.description,
    color: info.color,
    //   color: info.color
  });

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
    // setHexColor({ hex: color.hex });
  }

  function handleSave(e) {
    e.preventDefault();

    // update on backend
    fetch("/pins/" + info.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // close the form
        setEditInfo(!editInfo);

        // update pins array with updated pins
        let newArr = [...pins];
        newArr[index] = data;

        setPins(newArr);
      });
  }

  // show or hide form
  function handleEdit() {
    setEditInfo(!editInfo);
  }

  return (
    <Grid item xs={12} sm={10} md={4}>
      <Card variant="outlined" sx={{ borderRadius: "0dp" }}>
        {/* height 100% for card */}
        <CardHeader
          action={
            <IconButton size="small" aria-label="edit" onClick={handleEdit}>
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
          }
          title={
            <Grid container>
              <Grid item sx={{ backgroundColor: "#ff0000", width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}></Grid>
              <Typography variant="h6">
                {info.name ? info.name : "Untitled Buckit"}
              </Typography>
            </Grid>
          }
          sx={{ paddingBottom: "5px" }}
        />
        <CardContent sx={{ paddingTop: "5px", '&:last-child': {paddingBottom: "16px"} }}>
          {editInfo ? (
            // Card Edit
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
                <Grid item xs={12}>
                  {/* <Box sx={{ width: "50px" }}>
                    <HuePicker
                            color={ editForm.color }
                            onChange={ (color) => handleChange(color.hex) }
                          />
                </Box> */}
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    sx={{ my: "10px" }}
                  >
                    Save
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" color="#6d6d6d">
                    {info.place_name}
                  </Typography>
                </Grid>
                <Grid item xs={6} align="right">
                  <Typography variant="overline" color="#6d6d6d">
                    {info.latitude}, {info.longitude}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ) : (
            // Card
            <Grid container>
              {info.description ? (
                <Grid item xs={12}>
                  <Typography gutterBottom>{info.description}</Typography>
                </Grid>
              ) : null}
              <Grid item xs={6}>
                <Typography variant="body2" color="#6d6d6d">
                  {info.place_name}
                </Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography variant="overline" color="#6d6d6d">
                  {info.latitude}, {info.longitude}
                </Typography>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Buckit;
