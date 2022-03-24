import React, {useContext} from "react";
import {TeamContext} from "../../TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {GET_PROJECT_INFO, GET_TEAM_NAME, GET_TICKET} from "../../../../gql";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ContentGridProxy from "../../../components/ContentGridProxy";
import TopProxy from "../../../components/TopProxy";
import BreadcrumbGridProxy from "../../../components/BreadcrumbGridProxy";
import HeaderGridProxy from "../../../components/HeaderGridProxy";
import TitleProxy from "../../../components/TitleProxy";
import Title from "../../../components/Title";
import ContentLayout from "../../../components/ContentLayout";

const Ticket = () => {
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
        <ContentLayout
            breadcrumb={[
                {
                   'onClick': handleBreadcrumTeamChange,
                    'text': 'Teams >'
                },
                {
                    'onClick': handleBreadcrumProjectChange,
                    'text': `${teamData.team.prefix} >`
                },
                {
                    'onClick': handleBreadcrumTicketChange,
                    'text': `${projectData.project.name} >`
                },
                {
                    'text': `Ticket: ${ticketData.ticket.name}`,
                    'disabled': true
                }
            ]}
            info={
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
            }
        />
    );
};

export default Ticket;
