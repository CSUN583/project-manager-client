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
import {useContext} from "react";
import {TeamContext} from "../TeamsContext";
import Button from "@mui/material/Button";
import {LIST_TEAM_MEMBERS} from "../../../gql";
import LoadingCircle from "../../components/LoadingCircle";
import MemberModal from "./MemberModal";
import ListContainer from "../../components/ListContainer";


const MembersList = () => {
    const {teamId, setTeamMemberId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamMemberId(id)
    }

    const { error, loading, data } = useQuery(LIST_TEAM_MEMBERS, {variables : {id: teamId}});

    if (loading) return <LoadingCircle />

    if (error) return null

    return (
        <ListContainer>
            <ListItem>
                <ListItemText
                    primary={
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
                                <MemberModal />
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
        </ListContainer>
    );
};

export default MembersList;

