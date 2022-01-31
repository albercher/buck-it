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
      <Card sx={{}}>
        <CardHeader
          disableTypography
          action={
            <IconButton aria-label="edit" onClick={handleEdit}>
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6">
              {info.name ? info.name : "Untitled Buckit"}
            </Typography>
          }
          sx={{ borderTop: 2, borderTopColor: editForm.color }}
        />

        {editInfo ? (
          // Card Edit
          <CardContent sx={{ textAlign: "center" }}>
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
                <Grid item xs={12}>
                  <TextField
                    name="description"
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    value={editForm.description || ""}
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
              </Grid>
              <Button type="submit" variant="contained" disableElevation>
                Save
              </Button>
            </Box>
            <Grid item xs={12}>
              <Typography variant="body2">{info.place_name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="overline">
                {info.latitude}, {info.longitude}
              </Typography>
            </Grid>
          </CardContent>
        ) : (
          // Card
          <CardContent sx={{ textAlign: "center" }}>
            <Grid container>
              {info.description ? (
                <Grid item xs={12}>
                  <Typography>{info.description}</Typography>
                </Grid>
              ) : null}
              <Grid item xs={12}>
                <Typography variant="body2">{info.place_name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="overline">
                  {info.latitude}, {info.longitude}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
}

export default Buckit;
