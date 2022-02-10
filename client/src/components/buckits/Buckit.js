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
import { useState } from "react";

// import { HuePicker } from 'react-color'
import { TwitterPicker } from "react-color";

function Buckit({ info, setBuckits, buckits, index }) {
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
    fetch("/buckets/" + info.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editForm),
    })
      .then((response) => response.json())
      .then((data) => {
        // close the form
        setEditInfo(!editInfo);

        // update buckits array with updated buckits
        let newArr = [...buckits];
        newArr[index] = data;

        setBuckits(newArr);
      });
  }

  function handleColorChange(color, e) {
    setEditForm({
      ...editForm,
      color: color.hex,
    });
  }

  // show or hide form
  function handleEdit() {
    setEditInfo(!editInfo);
  }

  function handleDelete() {
    fetch("/buckits/" + info.id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        let filteredArray = buckits.filter(buckit => buckit.id !== info.id);
        setBuckits(filteredArray);
      });
  }

  return (
    <Grid item xs={12} sm={10} md={4}>
      <Card variant="outlined" sx={{ borderRadius: "0dp", height: "100%" }}>
        {/* height 100% for card */}
        <CardHeader
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
          title={
            <Grid container>
              <Grid
                item
                sx={{
                  backgroundColor: editForm.color,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></Grid>
              <Typography variant="h6">
                {info.name ? info.name : "Untitled Buckit"}
              </Typography>
            </Grid>
          }
          sx={{ paddingBottom: "5px" }}
        />
        <CardContent
          sx={{ paddingTop: "5px", "&:last-child": { paddingBottom: "16px" } }}
        >
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
                <Grid item xs={12} sx={{ marginTop: "15px" }}>
                  <Typography variant="caption" color="rgba(0, 0, 0, 0.6)">
                    Buckit Color
                  </Typography>
                  <TwitterPicker
                    // width="100%"
                    colors={['#cc2936', "#f9AA33","#ffdc14", "#0e6325", "#1e609e", "#714b94", "#c774cf" ]}
                    color={editForm.color}
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
