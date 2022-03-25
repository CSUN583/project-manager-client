import React, {Fragment, memo, useContext, useState} from "react";
import {TeamContext} from "../../TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {GET_PROJECT_INFO, GET_TEAM_NAME, GET_TICKET, LIST_USERS} from "../../../../gql";
import {Box, Chip, CircularProgress, Container, Grid, MenuItem, TextField, Typography} from "@mui/material";
import ContentLayout from "../../../layout/ContentLayout";
import FormLayout from "../../../components/FormLayout";
import LoadingCircle from "../../../components/LoadingCircle";

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
    4: "error ",
    5: "info"
}

const Ticket = memo(() => {
    const {teamTicketId, setTeamTicketId, teamProjectId, setTeamProjectId, teamId, setTeamId} = useContext(TeamContext)

    const [ticketDescription, setTicketDescription] = useState('')
    const [ticketPoint, setTicketPoint] = useState(null)
    const [ticketStatus, setTicketStatus] = useState(null)
    const [ticketOwner, setTicketOwner] = useState(null)

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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const {error: projectError, loading: projectLoading, data: projectData} = useQuery(GET_PROJECT_INFO, {variables: {id: teamProjectId}});
    const {error: teamError, loading: teamLoading, data: teamData} = useQuery(GET_TEAM_NAME, {variables: {id: teamId}});
    const {error: ticketError, loading: ticketLoading, data: ticketData} = useQuery(GET_TICKET, {variables: {id: teamTicketId}});
    const {error: userError, loading: userLoading, data: userData } = useQuery(LIST_USERS, {
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only"}
    )

    if (projectLoading || teamLoading || ticketLoading || userLoading) return <LoadingCircle/>
    if (projectError || teamError || ticketError || userError) return null
    return (
        <ContentLayout
            breadcrumb={[
                {
                    'onClick': handleBreadcrumTeamChange,
                    'text': 'Teams >'
                },
                {
                    'onClick': handleBreadcrumProjectChange,
                    'text': `${teamData?.team?.prefix} >`
                },
                {
                    'onClick': handleBreadcrumTicketChange,
                    'text': `${projectData?.project?.name} >`
                },
                {
                    'text': `${ticketData?.ticket?.name}`,
                    'disabled': true
                }
            ]}
            title={`Ticket: ${ticketData?.ticket?.name}`}
            info={
                <Box
                    ml={1}
                >
                    <Container
                        maxWidth='xs'
                    >
                        <FormLayout
                            disabled={!ticketDescription && !ticketPoint && !ticketStatus && !ticketOwner}
                            label={'Update Ticket'}
                            onSubmit={handleSubmit}
                            content={
                                [
                                    <TextField
                                        id="ticket-text-field-ticket-owner"
                                        select
                                        fullWidth
                                        label="Owner"
                                        value={ticketOwner ? ticketOwner : ticketData?.ticket?.owners[0].name}
                                        onChange={e => setTicketOwner(e.target.value)}
                                        variant="standard"
                                        InputProps={{ disableUnderline: true }}
                                    >
                                        {userData?.users?.map( (user, i) =>
                                            <MenuItem key={i} value={user.name} dense>
                                                {user.name}
                                            </MenuItem>
                                        )}
                                    </TextField>,
                                    <TextField
                                        id="ticket-text-field-ticket-point"
                                        select
                                        fullWidth
                                        label="Points"
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
                                    </TextField>,
                                    <TextField
                                        id="ticket-text-field-ticket-status"
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
                                    </TextField>,
                                    <TextField
                                        required
                                        fullWidth
                                        inputProps={{maxLength: 52}}
                                        autoComplete='off'
                                        size='small'
                                        multiline
                                        rows={4}
                                        id="ticket-text-field-ticket-description"
                                        label="Description"
                                        variant="standard"
                                        value={ticketDescription.length ? ticketDescription : ticketData?.ticket?.description}
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
