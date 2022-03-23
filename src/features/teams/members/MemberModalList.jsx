import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import LoadingCircle from "../../components/LoadingCircle";
import {useQuery} from "@apollo/react-hooks";
import {LIST_USERS} from "../../../gql";
import {useContext, useState} from "react";
import {TeamContext} from "../TeamsContext";

const MemberModalList = () => {
    const {teamId} = useContext(TeamContext)

    const [checked, setChecked] = useState({});

    const handleToggle = (key) => () => {
        const new_checked = {...checked}
        if (key in new_checked){
            new_checked[key] = !new_checked[key]
        }
        else {
            new_checked[key] = true
        }
        setChecked(new_checked)
    }

    const { error, loading, data } = useQuery(LIST_USERS);

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
                        <ListItemButton role={undefined} onClick={handleToggle(user.id)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    disabled={inTeam}
                                    edge="start"
                                    checked={!!checked[user.id] || inTeam}
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
