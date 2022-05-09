import React from 'react';
import {Box, Chip, Grid, Typography} from "@mui/material";
import {ticket_color_enum, ticket_status_enum} from "../tickets/Ticket";
import ListLayout from "../layout/ListLayout";

const UserInformation = ({userData}) => {
    const {email, tickets, teams} = userData.user

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
