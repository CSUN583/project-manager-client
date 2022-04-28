import {useState} from 'react'
import {TextField} from "@mui/material";
import {useMutation} from "@apollo/react-hooks";
import {CREATE_TEAM} from "../../gql";
import ModalProxy from "../proxy/ModalProxy";
import FormLayout from "../layout/FormLayout";


const TeamModal = ({refetch}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [teamName, setTeamName] = useState('')
    const [teamPrefix, setTeamPrefix] = useState('')

    const [createTeam] = useMutation(CREATE_TEAM)

    const handleSubmit = (e) => {
        e.preventDefault()

        createTeam({
            variables: {
                name: teamName,
                prefix: teamPrefix,
            }
        })
            .then(r => refetch())
            .finally(() => handleClose())
    }

    return (
        <ModalProxy
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
        >
            <FormLayout
                onSubmit={handleSubmit}
                title='Add Team'
                content={[
                    <TextField
                        required
                        fullWidth
                        inputProps={{maxLength: 5}}
                        autoComplete='off'
                        size='small'
                        id="text-field-team-prefix"
                        label="Prefix"
                        variant='standard'
                        value={teamPrefix}
                        onChange={e => setTeamPrefix(e.target.value)}
                    />,
                    <TextField
                        required
                        fullWidth
                        inputProps={{maxLength: 15}}
                        autoComplete='off'
                        size='small'
                        id="text-field-team-name"
                        label="Name"
                        variant='standard'
                        value={teamName}
                        onChange={e => setTeamName(e.target.value)}
                    />
                ]}
            />
        </ModalProxy>
    );
}

export default TeamModal
