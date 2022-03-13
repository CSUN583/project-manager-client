import { Container, Grid, Typography} from "@mui/material";
import TeamsList from "./TeamsList";
import AddTeamModal from "./AddTeamModal";


const Teams = () => {

    return (
        <Container >
            <Grid
                container
                direction='column'
                spacing={1}
            >
                <Grid item>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Grid item>
                            <Typography variant='h2'>
                                Teams
                            </Typography>
                        </Grid>
                        <Grid item>
                            <AddTeamModal />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <TeamsList />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Teams;
