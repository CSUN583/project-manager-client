import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {Grid, IconButton, Paper, TextField} from "@mui/material";
import {AddCircleOutline} from "@mui/icons-material";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import {endOfDay, format} from "date-fns";


const TicketModal = ({refetch}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectEndDate, setProjectEndDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
    }

    const handleEndDateChange = (newValue) => {
        setProjectEndDate(newValue);
    };

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
                    <Box
                        p={5}
                        minWidth={300}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                direction='column'
                                spacing={3}
                            >
                                <Grid item>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h5"
                                        component="h5"
                                    >
                                        New Project
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        autoComplete='off'
                                        size='small'
                                        id="text-field-project-name"
                                        label="Name"
                                        variant='standard'
                                        value={projectName}
                                        onChange={e => setProjectName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <LocalizationProvider dateAdapter={DateAdapter}>
                                        <DatePicker
                                            disablePast
                                            allowSameDateSelection
                                            label="Project End Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={projectEndDate}
                                            onChange={handleEndDateChange}
                                            renderInput={(params) => <TextField required fullWidth {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        autoComplete='off'
                                        size='small'
                                        multiline
                                        rows={4}
                                        id="text-field-project-description"
                                        label="Description"
                                        variant='outlined'
                                        value={projectDescription}
                                        onChange={e => setProjectDescription(e.target.value)}
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

export default TicketModal
