import {useQuery} from "@apollo/react-hooks";
import {CircularProgress, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {gql} from "apollo-boost";
import {useContext} from "react";
import {TeamContext} from "./TeamsPage";


const TeamsList = () => {
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
        <List>
            <ListItem>
                <ListItemText
                    primary ={
                        <Grid
                            container
                            wrap='nowrap'
                            spacing={5}
                        >
                            <Grid item>
                                <Typography>
                                    Prefix
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    Name
                                </Typography>
                            </Grid>
                        </Grid>
                    }
                />
            </ListItem>
            <Divider />
            {data.teams.map( t =>
                <ListItem
                    key={t.id}
                    disablePadding
                >
                    <ListItemButton
                        onClick={() => handleClick(t.id)}
                    >
                        <ListItemText
                            primary = {
                                <Grid
                                    container
                                    wrap='nowrap'
                                    spacing={5}
                                >
                                    <Grid item>
                                        <Typography>
                                            {t.prefix}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            {t.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    );
};

export default TeamsList;
