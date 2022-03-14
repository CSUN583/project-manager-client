import React, {useContext} from "react";
import {TeamContext} from "./TeamsPage";
import {useQuery} from "@apollo/react-hooks";
import {GET_PROJECT_INFO, GET_TEAM_NAME, GET_TICKET} from "../../gql";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const TeamProjectTicket = () => {
    const {teamTicketId, setTeamTicketId, teamProjectId, setTeamProjectId, teamId, setTeamId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamTicketId(id)
    }

    const handleBreadcrumTicketChange = () => {
        setTeamTicketId(null)
    };

    const handleBreadcrumProjectChange = () => {
        setTeamProjectId(null);
        setTeamTicketId(null)
    };

    const handleBreadcrumTeamChange = () => {
        setTeamProjectId(null);
        setTeamId(null)
        setTeamTicketId(null)
    };

    const { error: projectError, loading: projectLoading, data: projectData } = useQuery(GET_PROJECT_INFO, {variables : {id: teamProjectId}});

    const { error: teamError, loading: teamLoading, data: teamData } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});

    const { error: ticketError, loading: ticketLoading, data: ticketData } = useQuery(GET_TICKET, {variables : {id: teamId}});

    if (projectLoading || teamLoading || ticketLoading) return <CircularProgress />

    if (projectError || teamError || ticketError) return null

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
                                    <Button
                                        size='small'
                                        onClick={handleBreadcrumTicketChange}
                                    >
                                        {projectData.project.name} &nbsp;>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='body2'
                                    >
                                        {ticketData.ticket.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box ml={1}>
                                <Typography variant='h5'>
                                    Ticket:&nbsp;{ticketData.ticket.name}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
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
                                                    Points:
                                                    <br />
                                                    {ticketData.ticket.point}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant='body2'
                                                >
                                                    Status:
                                                    <br />
                                                    {ticketData.ticket.status}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TeamProjectTicket;
