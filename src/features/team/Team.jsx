import {CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import {TeamContext} from "./TeamsPage";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import AddTeamModal from "./AddTeamModal";
import TeamProjects from "./TeamProjects";

const Team = () => {
    const [teamId, setTeamId] = useContext(TeamContext)

    const GET_TEAM = gql`
        {
            team(id: ${teamId}) {
                id,
                prefix,
                name
            }
        }
    `;

    const { error, loading, data } = useQuery(GET_TEAM);

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <Container >
            <Grid
                container
                direction='column'
                spacing={4}
            >
                <Grid item>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Grid item>
                            <Typography variant='h2'>
                                Team: {data.team.prefix}
                            </Typography>
                        </Grid>
                        <Grid item>
                            View Members
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <TeamProjects />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Team;
