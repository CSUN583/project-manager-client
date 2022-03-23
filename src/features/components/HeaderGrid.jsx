import React from 'react';
import {Grid} from "@mui/material";

const HeaderGrid = ({children}) => {
    return (
        <Grid
            container
            wrap='nowrap'
            alignItems='center'
            justifyContent='space-between'
        >
            {children}
        </Grid>
    );
};

export default HeaderGrid;
