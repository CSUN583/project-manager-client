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
import {TeamContext} from "./TeamsPage";
import Button from "@mui/material/Button";
import AddTeamModal from "./AddTeamModal";
import {useQuery} from "@apollo/react-hooks";
import {LIST_TEAMS} from "../../gql";


const TeamsList = () => {
    const {setTeamId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamId(id)
    }

    const { error, loading, data, refetch } = useQuery(LIST_TEAMS);

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
                                <AddTeamModal refetch={refetch}/>
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
        </List>
    );
};

export default TeamsList;
