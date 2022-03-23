import React from 'react';
import {Container, Grid} from "@mui/material";

const ContentGrid = ({children}) => {
    return (
        <Container
            disableGutters
        >
            <Grid
                container
                direction='column'
                spacing={3}
            >
                {children}
            </Grid>
        </Container>
    );
};

export default ContentGrid;
