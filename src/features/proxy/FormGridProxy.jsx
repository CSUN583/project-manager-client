import React from 'react';
import {Grid} from "@mui/material";

const FormGridProxy = ({children}) => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            {children}
        </Grid>
    );
};

export default FormGridProxy;
