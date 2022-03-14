import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {Grid, IconButton, Paper, TextField} from "@mui/material";
import {useMutation} from "@apollo/react-hooks";
import {CREATE_TEAM} from "../gql";
import {AddCircleOutline} from "@mui/icons-material";

const AddTeamModal = ({refetch}) => {
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
        <div>
            <IconButton
                onClick={handleOpen}
                color='primary'
            >
                <AddCircleOutline />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Box p={5}>
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                direction='column'
                                spacing={3}
                            >
                                <Grid item>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h4"
                                        component="h4"
                                    >
                                        New Team
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="text-field-team-prefix"
                                        label="Prefix"
                                        variant='standard'
                                        value={teamPrefix}
                                        onChange={e => setTeamPrefix(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="text-field-team-name"
                                        label="Name"
                                        variant='standard'
                                        value={teamName}
                                        onChange={e => setTeamName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        fullWidth
                                        variant='contained'
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Modal>
        </div>
    );
}

export default AddTeamModal
