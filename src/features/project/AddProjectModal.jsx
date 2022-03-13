import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {Grid, Paper, TextField} from "@mui/material";
import {gql} from "apollo-boost";
import {useMutation} from "@apollo/react-hooks";

const AddTeamModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <Button
                onClick={handleOpen}
            >
                Add Project
            </Button>
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
                                        New Project
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="text-field-project-prefix"
                                        label="Prefix"
                                        variant='standard'
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        id="text-field-project-name"
                                        label="Name"
                                        variant='standard'
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
