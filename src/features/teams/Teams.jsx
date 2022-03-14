import { Container, Grid, Typography} from "@mui/material";
import TeamsList from "./TeamsList";


const Teams = () => {

    return (
        <Container
            disableGutters
        >
            <Grid
                container
                direction='column'
            >
                <Grid item>
                    <Typography variant='h3'>
                        Teams
                    </Typography>
                </Grid>
                <Grid item>
                    <TeamsList />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Teams;
