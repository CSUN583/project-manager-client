import {Box, Grid, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box pt={5} pb={1}>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                direction='column'
            >
                <Grid item>
                    <Typography
                        variant="caption"
                        color="textSecondary"
                        display='inline'
                    >
                        MIT License (c) 2021
                    </Typography>
                </Grid>
                <Grid item>
                    <a
                        target="_blank"
                        href="https://github.com/CSUN583"
                        rel="noreferrer"
                    >
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )

}

export default Footer
