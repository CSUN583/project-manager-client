import React, {useContext, useEffect} from 'react';
import {Box, Chip, Grid, Typography} from "@mui/material";
import {ticket_color_enum, ticket_status_enum} from "../tickets/Ticket";
import ListLayout from "../layout/ListLayout";
import {SpeechContext} from "../page/Page";

const UserInformation = ({userData}) => {
    const {email, tickets, teams} = userData.user
    const {setInfoText} = useContext(SpeechContext)

    useEffect(() => {
        const emailText = email ? `email: ${email}` : ''
        const teamsText = teams ? teams.map(team => `team ${team.prefix}, team name: ${team.name}`) : 'no teams'
        const ticketsText = tickets ? tickets.map(ticket => `ticket name: ${ticket.name}, status: ${ticket_status_enum[ticket.status]}`).join(',') : 'no tickets'
        setInfoText(`${emailText}, member of the following teams: ${teamsText}, assigned the following tickets: ${ticketsText}`)
        return () => setInfoText('')
    }, [email, setInfoText]);

    return (
        <Box
            ml={1}
        >
            <Grid
                container
                direction='column'
                spacing={3}
            >
                <Grid item>
                    <Typography variant='body1'>
                        Email: {email}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        Teams
                    </Typography>
                    <ListLayout
                        disabled
                        disableVoice
                        data={teams?.map(team => {
                            return {
                                'columns': [
                                    {
                                        'width': 100,
                                        'text': team.prefix
                                    },
                                    {
                                        'width': 150,
                                        'text': team.name
                                    },
                                ],
                            }
                        })}
                    />
                </Grid>
                <Grid item>
                    <Typography>
                        Tickets
                    </Typography>
                    <ListLayout
                        disabled
                        disableVoice
                        data={tickets?.map(ticket => {
                            return {
                                'columns': [
                                    {
                                        'width': 160,
                                        'text': ticket.name
                                    },
                                    {
                                        'width': 90,
                                        'component':
                                            <Chip
                                                sx={{width: '90px'}}
                                                label={ticket_status_enum[ticket.status]}
                                                color={ticket_color_enum[ticket.status]}
                                                variant='outlined'
                                            />
                                    },
                                ],
                            }
                        })}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserInformation;
