import {CircularProgress, Grid} from "@mui/material";

const LoadingCircle = () => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '30vh'}}
        >

            <Grid item xs={3}>
                <CircularProgress />
            </Grid>

        </Grid>
    );
};

export default LoadingCircle;
