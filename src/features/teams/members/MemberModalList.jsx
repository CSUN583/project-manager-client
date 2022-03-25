import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import LoadingCircle from "../../components/LoadingCircle";
import {useQuery} from "@apollo/react-hooks";
import {LIST_USERS} from "../../../gql";
import {useContext} from "react";
import {TeamContext} from "../TeamsContext";

const MemberModalList = ({checked, setChecked}) => {

    const {teamId} = useContext(TeamContext)

    const {error, loading, data } = useQuery(LIST_USERS, {
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only"}
    )

    if (loading) return <LoadingCircle />

    if (error) return null

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
        }}>
            {data?.users?.map( (user) => {
                const inTeam = user.teams.map(t => t.id).includes(teamId)

                return (
                    <ListItem
                        key={user.id}
                        disablePadding
                    >
                        <ListItemButton
                            dense
                            role={'checkbox'}
                            onClick={() => {
                                const new_checked = {...checked}
                                if (user.id in new_checked){
                                    new_checked[user.id] = !new_checked[user.id]
                                }
                                else {
                                    new_checked[user.id] = !inTeam
                                }
                                setChecked(new_checked)
                            }}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={!!checked[user.id] || (!(user.id in checked) && inTeam)}
                                    tabIndex={user.id}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': user.id }}
                                />
                            </ListItemIcon>
                            <ListItemText id={user.id} primary={user.name} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default MemberModalList
