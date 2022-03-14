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
import {LIST_TEAM_MEMBERS} from "../gql";
import {AddCircleOutline} from "@mui/icons-material";


const TeamMembersList = () => {
    const [teamId, setTeamId] = useContext(TeamContext)

    const [memberId, setMemberId] = useState(null)
    const handleClick = (id) => {
        setMemberId(id)
    }

    const { error, loading, data } = useQuery(LIST_TEAM_MEMBERS, {variables : {id: teamId}});

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
                                                minWidth={125}
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
                                                minWidth={125}
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
                {data?.team?.members?.map( m =>
                    <ListItem
                        key={m.id}
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
                                                    minWidth={125}
                                                >
                                                    <Typography
                                                        variant='body2'
                                                    >
                                                        {m.name}
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
                                                        {m.email}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            onClick={() => handleClick(m.id)}
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

export default TeamMembersList;

