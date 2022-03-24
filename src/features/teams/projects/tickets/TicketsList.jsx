import {CircularProgress} from "@mui/material";
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
                            'width': 125,
                            'text': ticket.name
                        },
                        {
                            'width': 125,
                            'text': ticket.status
                        },
                    ],
                    'onClick': () => handleClick(ticket.id)
                }
            })}
        />
    )
};

export default TicketsList;