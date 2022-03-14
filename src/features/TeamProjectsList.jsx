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
import {useContext, useState} from "react";
import {TeamContext} from "./TeamsPage";
import Button from "@mui/material/Button";
import {LIST_TEAM_PROJECTS} from "../gql";


const TeamProjectsList = () => {
    const [teamId, setTeamId] = useContext(TeamContext)

    const [projectId, setProectId] = useState(null)

    const handleClick = (id) => {
        setProectId(id)
    }

    const { error, loading, data } = useQuery(LIST_TEAM_PROJECTS, {variables : {id: teamId}});

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
                                        minWidth={90}
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
                                        minWidth={100}
                                    >
                                        <Typography
                                            variant='caption'
                                        >
                                            Description
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        minWidth={70}
                                    >
                                        <Typography
                                            variant='caption'
                                        >
                                            Start<br />Time
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        minWidth={70}
                                    >
                                        <Typography
                                            variant='caption'
                                        >
                                            End<br />Time
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box minWidth={50}/>
                                </Grid>
                            </Grid>
                        }
                    />
                </ListItem>
                <Divider />
                {data?.team?.projects?.map( p =>
                    <ListItem
                        key={p.id}
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
                                                        {p.name}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    minWidth={100}
                                                >
                                                    <Typography>
                                                        {p.description}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    minWidth={70}
                                                >
                                                    <Typography>
                                                        {p.startTime}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    minWidth={70}
                                                >
                                                    <Typography>
                                                        {p.endTime}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            onClick={() => handleClick(p.id)}
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

export default TeamProjectsList;
