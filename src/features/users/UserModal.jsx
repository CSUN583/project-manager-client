import {useState} from "react";
import {TextField} from "@mui/material";
import {useMutation} from "@apollo/react-hooks";
import {CREATE_USER} from "../../gql";
import ModalProxy from "../proxy/ModalProxy";
import FormLayout from "../components/FormLayout";

const UserModal = ({refetch}) => {
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
            .then(() => refetch())
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
                title='Add User'
                content={[
                    <TextField
                        required
                        fullWidth
                        inputProps={{maxLength: 15}}
                        autoComplete='off'
                        size='small'
                        id="text-field-user-name"
                        label="Name"
                        variant='standard'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />,
                    <TextField
                        required
                        fullWidth
                        inputProps={{maxLength: 35}}
                        id="text-field-user-email"
                        autoComplete='off'
                        size='small'
                        label="Email"
                        variant='standard'
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                    />
                ]}
            />
        </ModalProxy>
    );
}

export default UserModal
