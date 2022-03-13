import {useQuery} from "@apollo/react-hooks";
import {listTeams} from "../graphql";
import {Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import hash from 'object-hash'


const TeamsList = () => {
    const { error, loading, data } = useQuery(listTeams);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

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
            {data.teams.map( team =>
                <ListItem
                    key={hash(team)}
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemText
                            primary = {
                                <Grid
                                    container
                                    wrap='nowrap'
                                    spacing={5}
                                >
                                    <Grid item>
                                        <Typography>
                                            {team.prefix}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            {team.name}
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
