import {
    Box,
    Divider,
    Grid,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import {useContext} from "react";
import {TeamContext} from "./TeamsContext";
import Button from "@mui/material/Button";
import TeamModal from "./TeamModal";
import {useQuery} from "@apollo/react-hooks";
import {LIST_TEAMS} from "../../gql";
import LoadingCircle from "../components/LoadingCircle";
import ListContainerProxy from "../components/ListContainerProxy";


const TeamsList = () => {
    const {setTeamId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamId(id)
    }

    const { error, loading, data, refetch } = useQuery(LIST_TEAMS);

    if (loading) return <LoadingCircle />

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
                                            width={100}
                                        >
                                            <Typography
                                                variant='caption'
                                            >
                                                Prefix
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box
                                            width={150}
                                        >
                                            <Typography
                                                variant='caption'
                                            >
                                                Name
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TeamModal refetch={refetch}/>
                            </Grid>
                        </Grid>
                    }
                />
            </ListItem>
            <Divider />
            {data?.teams?.map( t =>
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
                                                width={100}
                                            >
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {t.prefix}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                width={150}
                                            >
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {t.name}
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
    );
};

export default TeamsList;
