import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';


import RecentPin from './RecentPin'

function Explore({publicPins}){

    return (
        <Box sx={{ marginTop: "70px", px: "15px" }}>
            <Typography variant="h4">Recent Buckits</Typography>
            {publicPins.map((info, index) => <RecentPin key={index} info={info} /> )}
        </Box>
    )
}

export default Explore