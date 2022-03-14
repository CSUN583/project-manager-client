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
import {gql} from "apollo-boost";
import {useContext} from "react";
import {TeamContext} from "./TeamsPage";
import Button from "@mui/material/Button";


const TeamsList = ({error, loading, data}) => {
    const [teamId, setTeamId] = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamId(id)
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
                                    minWidth={100}
                                >
                                    <Typography
                                        variant='caption'
                                    >
                                        Prefix
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='caption'
                                >
                                    Name
                                </Typography>
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
                                                <Typography>
                                                    {t.prefix}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                {t.name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => handleClick(t.id)}
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
