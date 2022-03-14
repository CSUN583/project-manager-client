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
import {UserContext} from "./UsersPage";


const UsersList = ({error, loading, data}) => {
    const [userId, setUserId] = useContext(UserContext)

    const handleClick = (id) => {
        setUserId(id)
    }

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <List>
            <ListItem>
                <ListItemText
                    primary ={
                        <Grid
                            container
                            wrap='nowrap'
                        >
                            <Grid item>
                                <Box
                                    minWidth={140}
                                >
                                    <Typography
                                        variant='caption'
                                    >
                                        Name
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='caption'
                                >
                                    Email
                                </Typography>
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
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        wrap='nowrap'
                                    >
                                        <Grid item>
                                            <Box
                                                minWidth={140}
                                            >
                                                <Typography>
                                                    {u.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                {u.email}
                                            </Typography>
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
        </List>
    );
};

export default UsersList;
