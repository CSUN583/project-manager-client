import { Container, Grid, Typography} from "@mui/material";
import TeamsList from "./TeamsList";
import AddTeamModal from "./AddTeamModal";
import {useQuery} from "@apollo/react-hooks";
import {LIST_TEAMS} from "../gql";


const Teams = () => {
    const { error, loading, data, refetch } = useQuery(LIST_TEAMS);

    return (
        <Container
            disableGutters
        >
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
                            <Typography variant='h3'>
                                Teams
                            </Typography>
                        </Grid>
                        <Grid item>
                            <AddTeamModal refetch={refetch}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <TeamsList error={error} loading={loading} data={data}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Teams;
