import {Grid} from "@mui/material";

const TopProxy = ({children}) => {
    return (
        <Grid
            container
            direction='column'
        >
            {children}
        </Grid>
    );
};

export default TopProxy;
