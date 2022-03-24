import {Grid} from "@mui/material";

const ListRowGridProxy = ({children}) => {
    return (
        <Grid
            container
            wrap='nowrap'
        >
            {children}
        </Grid>
    );
};

export default ListRowGridProxy;
