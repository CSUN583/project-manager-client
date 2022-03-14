import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

const UserInformation = ({userData}) => {

    const {email, tickets, teams} = userData.user

    return (
        <Box
            ml={1}
        >
            <Grid
                container
                direction='column'
                spacing={3}
            >

                <Grid item>
                    <Typography
                        variant='body2'
                    >
                        Email: {email}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant='body2'
                    >
                        Tickets:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant='body2'
                    >
                        Teams:
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserInformation;
