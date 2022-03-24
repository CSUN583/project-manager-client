import {
    Box,
    CircularProgress,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import {useContext} from "react";
import Button from "@mui/material/Button";
import {UserContext} from "./UsersContext";
import AddUserModal from "./AddUserModal";
import {useQuery} from "@apollo/react-hooks";
import {LIST_USERS} from "../../gql";
import ListContainerProxy from "../components/ListContainerProxy";


const UsersList = () => {
    const [userId, setUserId] = useContext(UserContext)

    const handleClick = (id) => {
        setUserId(id)
    }

    const { error, loading, data, refetch } = useQuery(LIST_USERS);

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <ListContainerProxy>
            <ListItem>
                <ListItemText
                    primary ={
                        <Grid
                            container
                            wrap='nowrap'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid item>
                                <Grid
                                    container
                                    wrap='nowrap'
                                >
                                    <Grid item>
                                        <Box
                                            width={125}
                                        >
                                            <Typography
                                                variant='caption'
                                            >
                                                Name
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            width={125}
                                        >
                                            <Typography
                                                variant='caption'
                                            >
                                                Email
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <AddUserModal refetch={refetch}/>
                            </Grid>
                        </Grid>
                    }
                />
            </ListItem>
            <Divider />
            {data?.users?.map( u =>
                <ListItem
                    key={u.id}
                >
                    <ListItemText
                        primary = {
                            <Grid
                                container
                                wrap='nowrap'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        wrap='nowrap'
                                    >
                                        <Grid item>
                                            <Box
                                                width={125}
                                            >
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {u.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                width={125}
                                            >
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {u.email}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => handleClick(u.id)}
                                    >
                                        View
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                    />
                </ListItem>
            )}
        </ListContainerProxy>
    );
};

export default UsersList;
