import React from 'react';
import {Grid} from "@mui/material";

const BreadcrumbGrid = ({children}) => {
    return (
        <Grid
            container
            alignItems='center'
        >
            {children}
        </Grid>
    );
};

export default BreadcrumbGrid;
