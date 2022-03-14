import {useContext, useState} from "react";
import {TeamContext} from "./TeamsPage";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {useQuery} from "@apollo/react-hooks";
import {GET_PROJECT_INFO, GET_TEAM_NAME} from "../../gql";
import TeamProjectTicketsList from "./TeamProjectTicketsList";
import TeamProjectInformation from "./TeamProjectInformation";

const TeamProject = () => {
    const {teamId, setTeamId, teamProjectId, setTeamProjectId} = useContext(TeamContext)

    const [navigation, setNavigation] = useState('tickets')

    const handleNavigationChange = (event, newValue) => {
        setNavigation(newValue);
    }

    const handleBreadcrumProjectChange = () => {
        setTeamProjectId(null);
    };

    const handleBreadcrumTeamChange = () => {
        setTeamProjectId(null);
        setTeamId(null)
    };

    const { error: projectError, loading: projectLoading, data: projectData } = useQuery(GET_PROJECT_INFO, {variables : {id: teamProjectId}});

    const { error: teamError, loading: teamLoading, data: teamData } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});

    if (projectLoading || teamLoading) return <CircularProgress />

    if (projectError || teamError) return null

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
                                        onClick={handleBreadcrumProjectChange}
                                    >
                                        {teamData.team.prefix} &nbsp;>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='body2'
                                    >
                                        {projectData.project.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                wrap='nowrap'
                                alignItems='center'
                                justifyContent='space-between'
                            >
                                <Grid item>
                                    <Box ml={1}>
                                        <Typography variant='h5'>
                                            Project:&nbsp;{projectData.project.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <BottomNavigation
                                        showLabels
                                        value={navigation}
                                        onChange={handleNavigationChange}
                                    >
                                        <BottomNavigationAction
                                            label="Tickets"
                                            value="tickets"
                                        />
                                        <BottomNavigationAction
                                            label="Information"
                                            value="information"
                                        />
                                    </BottomNavigation>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {navigation === 'tickets' ? <TeamProjectTicketsList/> : <TeamProjectInformation projectData={projectData}/>}
                </Grid>
            </Grid>
        </Container>
    );

};

export default TeamProject;
