import React from 'react';
import {Container, Grid} from "@mui/material";

const ContentGridProxy = ({children}) => {
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

export default ContentGridProxy;
