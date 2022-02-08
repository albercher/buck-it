import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";

import BuckitPin from "./BuckitPin";

import { useState } from "react";

// import { HuePicker } from 'react-color'
import { TwitterPicker } from "react-color";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function NewBuckit({ setPins, pins, apiKey }) {
  //   const [hexColor, setHexColor] = useState({hex: "#FF0000"});
  const [newForm, setNewForm] = useState({
    // name: info.name,
    // description: info.description,
    // color: info.color,
    //   color: info.color
  });

  function handleChange(e) {
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
    // setHexColor({ hex: color.hex });
  }

  function handleSave(e) {
    // e.preventDefault();
    // // update on backend
    // fetch("/pins/" + info.id, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editForm),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // close the form
    //     setEditInfo(!editInfo);
    //     // update pins array with updated pins
    //     let newArr = [...pins];
    //     newArr[index] = data;
    //     setPins(newArr);
    //   });
  }

  function handleColorChange(color, e) {
    setNewForm({
      ...newForm,
      color: color.hex,
    });
  }

  return (
    // <Grid item xs={12} sm={10} md={4}>
    <Card variant="outlined" sx={{ borderRadius: "0dp", height: "100%" }}>
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
                value={newForm.name || ""}
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
                value={newForm.description || ""}
                multiline
              />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "15px" }}>
              <Typography variant="body1" color="rgba(0, 0, 0, 0.6)">
                Stops
              </Typography>
              <List>
                {/* map buckit pins here */}
                <BuckitPin />
              </List>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "15px" }}>
              <Typography variant="body1" color="rgba(0, 0, 0, 0.6)">
                Add stops
              </Typography>
              <GooglePlacesAutocomplete apiKey="AIzaSyC2zK2fEpFe4_0y8fh_XTIyqOA0BNj0utE" />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "15px" }}>
              <Typography variant="caption" color="rgba(0, 0, 0, 0.6)">
                Pin Color
              </Typography>
              <TwitterPicker
                // width="100%"
                colors={[
                  "#cc2936",
                  "#f9AA33",
                  "#ffdc14",
                  "#0e6325",
                  "#1e609e",
                  "#714b94",
                  "#c774cf",
                ]}
                color={newForm.color}
                onChange={handleColorChange}
                triangle="hide"
                styles={{
                  default: {
                    card: {
                      boxShadow: "none",
                    },
                    body: {
                      padding: "4px 0px 0px 0px",
                    },
                    // input: {
                    //   width: "20%"
                    // },
                    // hash: {
                    //   width: "10%"
                    // },
                    // swatch: {
                    //   width: "10%"
                    // },
                  },
                }}
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
    // </Grid>
  );
}

export default NewBuckit;
