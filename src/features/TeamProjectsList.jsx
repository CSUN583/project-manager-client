import {useQuery} from "@apollo/react-hooks";
import {
    Box,
    CircularProgress, Container,
    Divider,
    Grid, IconButton,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import {useContext, useState} from "react";
import {TeamContext} from "./TeamsPage";
import Button from "@mui/material/Button";
import {LIST_TEAM_PROJECTS} from "../gql";
import {AddCircleOutline} from "@mui/icons-material";


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
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        wrap='nowrap'
                                        alignItems='center'
                                    >
                                        <Grid item>
                                            <Box
                                                width={130}
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
                                                width={60}
                                            >
                                                <Typography
                                                    variant='caption'
                                                >
                                                    Start
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                width={60}
                                            >
                                                <Typography
                                                    variant='caption'
                                                >
                                                    End
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        color='primary'
                                    >
                                        <AddCircleOutline />
                                    </IconButton>
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
                                    alignItems='center'
                                >
                                    <Grid item>
                                        <Grid
                                            container
                                            wrap='nowrap'
                                        >
                                            <Grid item>
                                                <Box
                                                    width={130}
                                                >
                                                    <Typography
                                                        variant='body2'
                                                    >
                                                        {p.name}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    width={60}
                                                >
                                                    <Typography
                                                        variant='caption'
                                                    >
                                                        {p.startTime}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box
                                                    width={60}
                                                >
                                                    <Typography
                                                        variant='caption'
                                                    >
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
