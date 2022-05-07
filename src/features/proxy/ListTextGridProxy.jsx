import {Grid,} from "@mui/material";

const ListTextGridProxy = ({children}) => {
    return (
        <Grid
            container
            wrap='nowrap'
            justifyContent='space-between'
            alignItems='center'
        >
            {children}
        </Grid>
    )
};

export default ListTextGridProxy;
