import {useContext, useState} from "react";
import {TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import ModalProxy from "../../proxy/ModalProxy";
import FormLayout from "../../components/FormLayout";
import {useMutation} from "@apollo/react-hooks";
import {ADD_TEAM_TO_PROJECT, CREATE_PROJECT} from "../../../gql";
import {TeamContext} from "../TeamsContext";


const ProjectModal = ({refetch}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {teamId} = useContext(TeamContext)

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectEndDate, setProjectEndDate] = useState('')

    const [CreateProject] = useMutation(CREATE_PROJECT)
    const [AddTeamToProject] = useMutation(ADD_TEAM_TO_PROJECT)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const createProjectRes = await CreateProject({
                variables: {
                    name: projectName,
                    description: projectDescription,
                    startTime: new Date().toLocaleString().split(',')[0],
                    endTime: new Date(projectEndDate).toLocaleString().split(',')[0]
                }
            })

            const projectId = createProjectRes.data.createProject.id

            if (!!projectId) {
                AddTeamToProject({
                    variables: {
                        team_id: teamId,
                        project_id: projectId,
                    }
                }).then(refetch)
            }
        }
        finally {
            handleClose()
        }
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
                        inputProps={{maxLength: 15}}
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
                        inputProps={{maxLength: 52}}
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
