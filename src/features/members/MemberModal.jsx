import {useContext, useState} from "react";
import MemberModalList from "./MemberModalList";
import ModalProxy from "../proxy/ModalProxy";
import FormLayout from "../layout/FormLayout";
import {useMutation} from "@apollo/react-hooks";
import {ADD_USER_TO_TEAM, REMOVE_USER_FROM_TEAM} from "../../gql";
import {TeamContext} from "../teams/TeamsContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const MemberModal = ({refetch}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [checked, setChecked] = useState({})
    const {teamId} = useContext(TeamContext)

    const [AddUserToTeam] = useMutation(ADD_USER_TO_TEAM)
    const [RemoveUserFromTeam] = useMutation(REMOVE_USER_FROM_TEAM)

    const handleSubmit = (e) => {
        e.preventDefault()

        for (const [key, value] of Object.entries(checked)){
            switch(value){
                case true:
                    AddUserToTeam({
                        variables: {
                            user_id: key,
                            team_id: teamId,
                        }
                    }).then(refetch)
                    break
                case false:
                    RemoveUserFromTeam({
                        variables: {
                            user_id: key,
                            team_id: teamId,
                        }
                    }).then(refetch)
                    break
                default:
            }
        }
        handleClose()
    }

    return (
        <ModalProxy
            iconButton={<AccountCircleIcon/>}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
        >
            <FormLayout
                onSubmit={handleSubmit}
                title='Add/Remove Members'
                content={[
                    <MemberModalList checked={checked} setChecked={setChecked}/>
                ]}
            />
        </ModalProxy>
    );
}

export default MemberModal
