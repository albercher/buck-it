import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import IconButton from '@mui/material/IconButton';


import { memo } from "react";

function PinInfo( { info } ){
    return (
        <Box sx={{ textAlign: 'center' }}>
            {info.name ? <Typography>{info.name}</Typography> : null}
            {info.description ? <Typography>{info.description}</Typography> : null}
            <Typography variant="body2">{info.place_name}</Typography>
            <Typography variant="overline">{info.latitude}, {info.longitude}</Typography>
        </Box>
    )
}

export default memo(PinInfo);