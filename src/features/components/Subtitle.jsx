import {Typography} from "@mui/material";

const Title = ({children}) => {
    return (
        <Typography variant='body1'>
            {children}
        </Typography>
    );
};

export default Title;
