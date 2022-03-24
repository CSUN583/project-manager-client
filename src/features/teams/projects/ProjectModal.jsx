import {useState} from "react";
import {TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import ModalProxy from "../../proxy/ModalProxy";
import FormLayout from "../../components/FormLayout";


const ProjectModal = ({refetch}) => {
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
        <ModalProxy
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
        >
            <FormLayout
                onSubmit={handleSubmit}
                title='Add Project'
                content={[
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
                    />,
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
                    </LocalizationProvider>,
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
                ]}
            />
        </ModalProxy>
    );
}

export default ProjectModal
