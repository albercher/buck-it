import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

function RecentPin( { info } ){
  return (
    <Grid item xs={12} sm={10} md={4}>
      <Card variant="outlined" sx={{ borderRadius: "0dp" }}>
        {/* height 100% for card */}
        <CardHeader
          title={
            <Grid container>
              <Grid
                item
                sx={{
                  backgroundColor: info.color,
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
        </CardContent>
      </Card>
    </Grid>
  );
}

export default RecentPin;
