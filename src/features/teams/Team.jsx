import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {TeamContext} from "./TeamsPage";
import {useQuery} from "@apollo/react-hooks";
import Button from "@mui/material/Button";
import TeamMembersList from "./TeamMembersList";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import {GET_TEAM_NAME} from "../../gql";
import TeamProjectsList from "./TeamProjectsList";

const Team = () => {
    const {teamId, setTeamId} = useContext(TeamContext)

    const [navigation, setNavigation] = useState('projects')

    const handleNavigationChange = (event, newValue) => {
        setNavigation(newValue);
    };

    const handleBreadcrumChange = () => {
        setTeamId(null);
    };

    const { error, loading, data } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});

    if (loading) return <CircularProgress />

    if (error) return null

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
                                        onClick={handleBreadcrumChange}
                                    >
                                        Teams &nbsp;>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='body2'
                                    >
                                        {data.team.prefix}
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
                                            Team:&nbsp;{data.team.prefix}
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
                                            label="Projects"
                                            value="projects"
                                        />
                                        <BottomNavigationAction
                                            label="Members"
                                            value="members"
                                        />
                                    </BottomNavigation>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {navigation === 'projects' ? <TeamProjectsList/> : <TeamMembersList />}
                </Grid>
            </Grid>
        </Container>
    )
};

export default Team;