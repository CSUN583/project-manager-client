import {useQuery} from "@apollo/react-hooks";
import {
    Box,
    CircularProgress, Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import {gql} from "apollo-boost";
import {useContext} from "react";
import {TeamContext} from "./TeamsPage";
import Button from "@mui/material/Button";


const MembersList = () => {
    const [teamId, setTeamId] = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamId(id)
    }

    const LIST_TEAMS = gql`
        {
            teams {
                id,
                prefix,
                name
            }
        }
    `;

    const { error, loading, data } = useQuery(LIST_TEAMS);

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <Container
            disableGutters
        >
            <List
                disablePadding
            >
                <ListItem>
                    <ListItemText
                        primary ={
                            <Grid
                                container
                                wrap='nowrap'
                                alignItems='center'
                            >
                                <Grid item>
                                    <Box
                                        minWidth={150}
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
                                        minWidth={150}
                                    >
                                        <Typography
                                            variant='caption'
                                        >
                                            Email
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box minWidth={70}/>
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
                                                    minWidth={90}
                                                >
                                                    <Typography>
                                                        {u.prefix}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    minWidth={100}
                                                >
                                                    <Typography>
                                                        {u.prefix}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    minWidth={70}
                                                >
                                                    <Typography>
                                                        {u.prefix}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    minWidth={70}
                                                >
                                                    <Typography>
                                                        {u.prefix}
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
            </List>
        </Container>
    );
};

export default MembersList;

