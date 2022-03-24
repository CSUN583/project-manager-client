import React from 'react';
import {Grid} from "@mui/material";

const BreadcrumbGridProxy = ({children}) => {
    return (
        <Grid
            container
            alignItems='center'
        >
            {children}
        </Grid>
    );
};

export default BreadcrumbGridProxy;
