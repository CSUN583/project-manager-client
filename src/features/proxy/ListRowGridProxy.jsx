import {Grid} from "@mui/material";

const ListRowGridProxy = ({children}) => {
    return (
        <Grid
            container
            wrap='nowrap'
            columnSpacing={{ xs: 1, sm: 5}}
        >
            {children}
        </Grid>
    );
};

export default ListRowGridProxy;
