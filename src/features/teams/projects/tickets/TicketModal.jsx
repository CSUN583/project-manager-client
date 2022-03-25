import {useContext, useState} from "react";
import {MenuItem, TextField} from "@mui/material";
import {TeamContext} from "../../TeamsContext";
import {useMutation} from "@apollo/react-hooks";
import {CREATE_TICKET} from "../../../../gql";
import ModalProxy from "../../../proxy/ModalProxy";
import FormLayout from "../../../components/FormLayout";


const TicketModal = ({refetch}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {teamProjectId} = useContext(TeamContext)

    const [ticketName, setTicketName] = useState('')
    const [ticketDescription, setTicketDescription] = useState('')
    const [ticketPoint, setTicketPoint] = useState('1')

    const [CreateTicket] = useMutation(CREATE_TICKET)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await CreateTicket({
                variables: {
                    name: ticketName,
                    description: ticketDescription,
                    point: ticketPoint,
                    status: 0,
                    projectId: teamProjectId
                }
            })
                .then(refetch)
        } finally {
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
                        id="text-field-ticket-name"
                        label="Name"
                        variant='standard'
                        value={ticketName}
                        onChange={e => setTicketName(e.target.value)}
                    />,
                    <TextField
                        id="outlined-select-currency"
                        select
                        fullWidth
                        label="Points"
                        value={ticketPoint}
                        onChange={handlePointsChange}
                        helperText="Select points value"
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
                        id="text-field-ticket-description"
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
