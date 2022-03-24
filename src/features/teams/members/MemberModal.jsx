import {useState} from "react";
import MemberModalList from "./MemberModalList";
import ModalProxy from "../../proxy/ModalProxy";
import FormLayout from "../../components/FormLayout";


const MemberModal = ({refetch}) => {
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
                    <MemberModalList/>
                ]}
            />
        </ModalProxy>
    );
}

export default MemberModal
