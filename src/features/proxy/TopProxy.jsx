import {Grid} from "@mui/material";

const TopProxy = ({children}) => {
    return (
        <Grid
            container
            direction='column'
            spacing={1}
        >
            {children}
        </Grid>
    );
};

export default TopProxy;
