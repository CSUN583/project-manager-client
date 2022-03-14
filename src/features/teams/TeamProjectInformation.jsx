import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

const TeamProjectInformation = ({projectData}) => {
    const {description, startTime, endTime} = projectData.project

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
                    <Grid
                        container
                        spacing={5}
                    >
                        <Grid item>
                            <Typography
                                variant='body2'
                            >
                                Start&nbsp;Time:
                                <br />
                                {startTime}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='body2'
                            >
                                End&nbsp;Time:
                                <br />
                                {endTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant='body2'
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TeamProjectInformation;
