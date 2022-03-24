import {
    Box, CircularProgress,
    Container,
    Divider,
    Grid, IconButton,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import {useContext} from "react";
import {TeamContext} from "../../TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {LIST_PROJECT_TICKETS} from "../../../../gql";
import {AddCircleOutline} from "@mui/icons-material";
import ListContainerProxy from "../../../components/ListContainerProxy";


const TicketsList = () => {
    const {teamProjectId, setTeamTicketId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamTicketId(id)
    }

    const { error, loading, data } = useQuery(LIST_PROJECT_TICKETS, {variables : {id: teamProjectId}});

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
                                    alignItems='center'
                                >
                                    <Grid item>
                                        <Box
                                            width={175}
                                        >
                                            <Typography
                                                variant='caption'
                                            >
                                                Tickets
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            width={75}
                                        >
                                            <Typography
                                                variant='caption'
                                            >
                                                Status
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
            <Divider variant="fullWidth"/>
            {data?.project?.tickets?.map( t =>
                <ListItem
                    key={t.id}
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
                                                width={175}
                                            >
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {t.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                width={75}
                                            >
                                                <Typography
                                                    variant='caption'
                                                >
                                                    {t.status}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => handleClick(t.id)}
                                        size='small'
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
    )
};

export default TicketsList;
