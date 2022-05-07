import {Chip, CircularProgress} from "@mui/material";
import {useContext} from "react";
import {TeamContext} from "../teams/TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {LIST_PROJECT_TICKETS} from "../../gql";
import ListLayout from "../layout/ListLayout";
import TicketModal from "./TicketModal";
import {ticket_color_enum, ticket_status_enum} from "./Ticket";


const TicketsList = () => {
    const {teamProjectId, setTeamTicketId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamTicketId(id)
    }

    const {error, loading, data, refetch} = useQuery(LIST_PROJECT_TICKETS, {variables: {id: teamProjectId}});

    if (loading) return <CircularProgress/>

    if (error) return null

    return (
        <ListLayout
            headerColumns={[
                {
                    'width': 175,
                    'text': 'Tickets',
                },
                {
                    'width': 75,
                    'text': 'Status',
                },
            ]}
            modal={<TicketModal refetch={refetch}/>}
            data={data?.project?.tickets?.map(ticket => {
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
                    'onClick': () => handleClick(ticket.id)
                }
            })}
        />
    )
};

export default TicketsList;
