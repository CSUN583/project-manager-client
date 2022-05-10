import React, {memo, useContext, useEffect, useState} from "react";
import {TeamContext} from "../teams/TeamsContext";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {UPDATE_TICKET, GET_PROJECT_INFO, GET_TEAM_NAME, GET_TICKET} from "../../gql";
import {Box, Container, Grid, MenuItem, TextField} from "@mui/material";
import ContentLayout from "../layout/ContentLayout";
import FormLayout from "../layout/FormLayout";
import LoadingCircle from "../components/LoadingCircle";
import {Apollo} from "../../apollo";
import {SpeechContext} from "../page/Page";

export const ticket_status_enum = {
    0: "new",
    1: "started",
    2: "finished",
    3: "accepted",
    4: "denied ",
    5: "delivered"
}

export const ticket_color_enum = {
    0: "primary",
    1: "warning",
    2: "success",
    3: "secondary",
    4: "error",
    5: "info"
}

const Ticket = memo(() => {
    const {teamTicketId, setTeamTicketId, teamProjectId, setTeamProjectId, teamId, setTeamId} = useContext(TeamContext)

    const [ticketDescription, setTicketDescription] = useState(null)
    const [ticketPoint, setTicketPoint] = useState(null)
    const [ticketStatus, setTicketStatus] = useState(null)

    const {error: projectError, loading: projectLoading, data: projectData} = useQuery(GET_PROJECT_INFO, {variables: {id: teamProjectId}});
    const {error: teamError, loading: teamLoading, data: teamData} = useQuery(GET_TEAM_NAME, {variables: {id: teamId}});
    const {error: ticketError, loading: ticketLoading, data: ticketData} = useQuery(GET_TICKET, {variables: {id: teamTicketId}});

    const [UpdateTicket] = useMutation(UPDATE_TICKET)

    const {setInfoText} = useContext(SpeechContext)

    useEffect(() => {
        const ticketPointText = ticketPoint ? `${ticketPoint}` : `${ticketData?.ticket?.point}`
        const ticketStatusText = ticketStatus ? ticket_status_enum[ticketStatus] : ticket_status_enum[ticketData?.ticket?.status]
        const ticketDescriptionText = ticketDescription != null ? ticketDescription : ticketData?.ticket?.description
        setInfoText(`points: ${ticketPointText}, status: ${ticketStatusText}, description: ${ticketDescriptionText}`)
        return () => setInfoText('')
    }, [setInfoText, ticketData?.ticket?.description, ticketData?.ticket?.point, ticketData?.ticket?.status, ticketDescription, ticketPoint, ticketStatus]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        UpdateTicket({
            variables: {
                id: teamTicketId,
                name: ticketData?.ticket?.name,
                description: ticketDescription || ticketData?.ticket?.description,
                point: ticketPoint || ticketData?.ticket?.point,
                status: ticketStatus || ticketData?.ticket?.status,
                projectId: teamProjectId
            }
        })
        .then(Apollo.resetStore)
        .finally(() => {
            setTicketDescription(null)
            setTicketPoint(null)
            setTicketStatus(null)
        })
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

    if (projectLoading || teamLoading || ticketLoading) return <LoadingCircle/>
    if (projectError || teamError || ticketError) return null
    return (
        <ContentLayout
            breadcrumb={[
                {
                    'onClick': handleBreadcrumTeamChange,
                    'text': 'Teams'
                },
                {
                    'onClick': handleBreadcrumProjectChange,
                    'text': `${teamData?.team?.prefix}`
                },
                {
                    'onClick': handleBreadcrumTicketChange,
                    'text': `${projectData?.project?.name}`
                },
                {
                    'text': `${ticketData?.ticket?.name}`,
                    'disabled': true
                }
            ]}
            title={`Ticket: ${ticketData?.ticket?.name}`}
            subtitle={`Owner: ${ticketData?.ticket?.owners[0]?.name}`}
            info={
                <Box
                    ml={1}
                >
                    <Container
                        maxWidth='xs'
                    >
                        <FormLayout
                            disabled={!ticketDescription && !ticketPoint && !ticketStatus}
                            label={'Update Ticket'}
                            onSubmit={handleSubmit}
                            content={
                                [
                                    <Grid
                                        container
                                        justifyContent='space-between'
                                        alignItems='center'
                                    >
                                        <Grid item>
                                            <TextField
                                                select
                                                fullWidth
                                                label="Points"
                                                sx={{width: '5ch'}}
                                                value={ticketPoint ? ticketPoint : ticketData?.ticket?.point}
                                                onChange={e => setTicketPoint(e.target.value)}
                                                variant="standard"
                                                InputProps={{ disableUnderline: true }}
                                            >
                                                {Array.from(Array(5).keys()).map(n => (
                                                    <MenuItem key={n} value={n + 1} dense>
                                                        {n + 1}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                select
                                                fullWidth
                                                label="Status"
                                                value={ticketStatus ? ticketStatus : ticketData?.ticket?.status}
                                                onChange={e => setTicketStatus(e.target.value)}
                                                variant="standard"
                                                InputProps={{ disableUnderline: true }}
                                            >
                                                {Array.from(Array(6).keys()).map(n => (
                                                    <MenuItem
                                                        key={n}
                                                        value={n}
                                                        dense
                                                    >
                                                        {ticket_status_enum[n]}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>,
                                    <TextField
                                        required
                                        fullWidth
                                        inputProps={{maxLength: 52}}
                                        autoComplete='off'
                                        size='small'
                                        multiline
                                        rows={4}
                                        label="Description"
                                        variant="standard"
                                        value={ticketDescription != null ? ticketDescription : ticketData?.ticket?.description}
                                        onChange={e => setTicketDescription(e.target.value)}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                ]
                            }
                        />
                    </Container>
                </Box>
            }
        />
    )
})

export default Ticket;
