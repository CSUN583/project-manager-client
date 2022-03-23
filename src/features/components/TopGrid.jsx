import {Grid} from "@mui/material";

const TopGrid = ({children}) => {
    return (
        <Grid
            container
            direction='column'
        >
            {children}
        </Grid>
    );
};

export default TopGrid;
