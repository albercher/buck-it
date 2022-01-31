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

function Buckit({ info }) {
  const [editInfo, setEditInfo] = useState(false);

  function handleEdit() {
    setEditInfo(!editInfo);
  }

  return (
    <Grid item xs={12} sm="auto">
      <Card>
        <CardHeader
          // avatar={
          //     <Avatar sx={{ bgcolor: "#FF0000" }} />
          //     <Box sx={{ backgroundColor: "#FF0000", padding: "10px"}}></Box>
          // }
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
          sx={{ borderTop: 2, borderTopColor: "#FF0000" }}
        />

        {editInfo ? (
          <CardContent>
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <Grid container>
                  <Grid item xs={12}>
                      <TextField id="standard-basic" fullWidth label="Name" variant="standard" />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Typography variant="body2">{info.place_name}</Typography>
            <Typography variant="overline">
              {info.latitude}, {info.longitude}
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            {info.name ? <Typography>{info.name}</Typography> : null}
            {info.description ? (
              <Typography>{info.description}</Typography>
            ) : null}
            <Typography variant="body2">{info.place_name}</Typography>
            <Typography variant="overline">
              {info.latitude}, {info.longitude}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
}

export default Buckit;
