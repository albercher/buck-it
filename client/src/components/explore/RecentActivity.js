import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";


function RecentActivity( {info} ){
    return (
        <Grid item xs={12} sm={10} md={4}>
        <Card variant="outlined" sx={{ borderRadius: "0dp" }}>
          <CardHeader
            avatar={
              <Checkbox
              disabled
                checked={info.completed}
                sx={{ px: "0px" }}
              />
            }
            title={<Typography variant="h6">{info.name}</Typography>}
            action={<Typography variant="body2" sx={{ paddingRight:"10px" }}>by {info.user.display_name}</Typography>}
            sx={{ paddingBottom: "0px" }}
          />
          <CardContent
            sx={{ paddingTop: "5px", "&:last-child": { paddingBottom: "16px" } }}
          >
            
              <Typography>{info.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
}

export default RecentActivity