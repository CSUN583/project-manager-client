import {useContext, useState} from "react";
import {MenuItem, TextField} from "@mui/material";
import {TeamContext} from "../teams/TeamsContext";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {ADD_USER_TICKET, CREATE_TICKET, LIST_USERS} from "../../gql";
import ModalProxy from "../proxy/ModalProxy";
import FormLayout from "../layout/FormLayout";
import {Apollo} from "../../apollo";


const TicketModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {teamProjectId} = useContext(TeamContext)

    const [ticketName, setTicketName] = useState('')
    const [ticketDescription, setTicketDescription] = useState('')
    const [ticketPoint, setTicketPoint] = useState('1')
    const [ticketOwner, setTicketOwner] = useState('')

    const {data: userData } = useQuery(LIST_USERS, {
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only"}
    )

    const [CreateTicket] = useMutation(CREATE_TICKET)
    const [AddUserTicket] = useMutation(ADD_USER_TICKET)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            CreateTicket({
                variables: {
                    name: ticketName,
                    description: ticketDescription,
                    point: ticketPoint,
                    status: 0,
                    projectId: teamProjectId
                }
            })
            .then( res => {
                AddUserTicket({
                    variables: {
                        user_id: parseInt(ticketOwner),
                        ticket_id: parseInt(res.data.createTicket.id)
                    }
                })
            })
            .finally(Apollo.resetStore)
        } finally {
            setTicketName('')
            setTicketDescription('')
            setTicketPoint('1')
            setTicketOwner('')
            handleClose()
        }
    }

    const handlePointsChange = (event) => {
        setTicketPoint(event.target.value);
    };

    return (
        <ModalProxy
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
        >
            <FormLayout
                onSubmit={handleSubmit}
                title='Create Ticket'
                content={[
                    <TextField
                        required
                        fullWidth
                        inputProps={{maxLength: 15}}
                        autoComplete='off'
                        size='small'
                        label="Name"
                        variant='standard'
                        value={ticketName}
                        onChange={e => setTicketName(e.target.value)}
                    />,
                    <TextField
                        required
                        select
                        fullWidth
                        label="Owner"
                        value={ticketOwner}
                        onChange={e => setTicketOwner(e.target.value)}
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                    >
                        {userData?.users?.map( (user, i) =>
                            <MenuItem key={i} value={user.id} dense>
                                {user.name}
                            </MenuItem>
                        )}
                    </TextField>,
                    <TextField
                        required
                        select
                        fullWidth
                        label="Points"
                        value={ticketPoint}
                        onChange={handlePointsChange}
                        helperText="Select points"
                        variant="standard"
                    >
                        {Array.from(Array(5).keys()).map(n => (
                            <MenuItem key={n} value={n + 1} dense>
                                {n + 1}
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
                        label="Description"
                        variant='outlined'
                        value={ticketDescription}
                        onChange={e => setTicketDescription(e.target.value)}
                    />
                ]}
            />
        </ModalProxy>
    );
}

export default TicketModal
