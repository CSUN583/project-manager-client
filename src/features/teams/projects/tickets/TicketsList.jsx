import {Chip, CircularProgress} from "@mui/material";
import {useContext} from "react";
import {TeamContext} from "../../TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {LIST_PROJECT_TICKETS} from "../../../../gql";
import ListLayout from "../../../layout/ListLayout";
import TicketModal from "./TicketModal";


const TicketsList = () => {
    const {teamProjectId, setTeamTicketId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamTicketId(id)
    }

    const status_enum = {
        0: "new",
        1: "started",
        2: "finished",
        3: "accepted",
        4: "denied ",
        5: "delivered"
    }

    const color_enum = {
        0: "primary",
        1: "warning",
        2: "success",
        3: "secondary",
        4: "error ",
        5: "info"
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
                                    label={status_enum[ticket.status]}
                                    color={color_enum[ticket.status]}
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
