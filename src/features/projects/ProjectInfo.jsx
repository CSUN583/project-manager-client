import React, {memo, useContext, useEffect} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {SpeechContext} from "../page/Page";

const ProjectInfo = memo(({projectData}) => {
    const {description, startTime, endTime} = projectData.project
    const {setInfoText} = useContext(SpeechContext)

    useEffect(() => {
        setInfoText(`start time: ${startTime}, end time: ${endTime}, summary: ${description}`)
        return () => setInfoText('')
    }, [description, endTime, setInfoText, startTime]);

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
                        wrap='nowrap'
                        alignItems='center'
                        spacing={5}
                    >
                        <Grid item>
                            <Typography
                                variant='body2'
                            >
                                Start&nbsp;Date:
                                <br />
                                {startTime}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='body2'
                            >
                                End&nbsp;Date:
                                <br />
                                {endTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction='column'
                    >
                        <Grid item>
                            <Typography
                                variant='body2'
                            >
                                Summary:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box
                                width={300}
                            >
                                <Typography
                                    style={{overflowWrap: 'break-word'}}
                                    variant='body2'
                                >
                                    {description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
});

export default ProjectInfo;
