import {useContext} from "react";
import {TeamContext} from "./TeamsPage";
import {useQuery} from "@apollo/react-hooks";
import {GET_TEAM_NAME, GET_USER} from "../../gql";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const TeamMember = () => {
    const {teamId, setTeamId, teamMemberId, setTeamMemberId} = useContext(TeamContext)

    const handleBreadcrumMemberChange = () => {
        setTeamMemberId(null);
    };

    const handleBreadcrumTeamChange = () => {
        setTeamMemberId(null);
        setTeamId(null)
    };

    const { error: memberError, loading: memberLoading, data: memberData } = useQuery(GET_USER, {variables : {id: teamMemberId}});

    const { error: teamError, loading: teamLoading, data: teamData } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});

    if (memberLoading || teamLoading) return <CircularProgress />

    if (memberError || teamError) return null

    return (
        <Container
            disableGutters
        >
            <Grid
                container
                direction='column'
            >
                <Grid item>
                    <Grid
                        container
                        direction='column'
                    >
                        <Grid item>
                            <Grid
                                container
                                alignItems='center'
                            >
                                <Grid item>
                                    <Button
                                        size='small'
                                        onClick={handleBreadcrumTeamChange}
                                    >
                                        Teams &nbsp;>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        size='small'
                                        onClick={handleBreadcrumMemberChange}
                                    >
                                        {teamData.team.prefix} &nbsp;>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='body2'
                                    >
                                        {memberData.user.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <Typography variant='h5'>
                                    Project:&nbsp;{memberData.user.name}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );

};

export default TeamMember;
