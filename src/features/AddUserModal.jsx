import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {Grid, IconButton, Paper, TextField} from "@mui/material";
import {useMutation} from "@apollo/react-hooks";
import {CREATE_USER, LIST_USERS} from "../gql";
import {AddCircleOutline} from "@mui/icons-material";

const AddUserModal = ({refetch}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const [createUser] = useMutation(CREATE_USER)

    const handleSubmit = (e) => {
        e.preventDefault()

        createUser({
            variables: {
                name: userName,
                email: userEmail,
            }
        })
        .then( () => refetch())
        .finally( () => handleClose())
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
                                        New User
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="text-field-user-name"
                                        label="Name"
                                        variant='standard'
                                        value={userName}
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="text-field-user-email"
                                        label="Email"
                                        variant='standard'
                                        value={userEmail}
                                        onChange={e => setUserEmail(e.target.value)}
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

export default AddUserModal
