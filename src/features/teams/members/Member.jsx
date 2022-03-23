import {useContext} from "react";
import {TeamContext} from "../TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {GET_TEAM_NAME, GET_USER} from "../../../gql";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ContentGrid from "../../components/ContentGrid";
import TopGrid from "../../components/TopGrid";
import BreadcrumbGrid from "../../components/BreadcrumbGrid";
import HeaderGrid from "../../components/HeaderGrid";
import TitleContainer from "../../components/TitleContainer";
import {Title} from "@mui/icons-material";

const Member = () => {
    const {teamId, setTeamId, teamMemberId, setTeamMemberId} = useContext(TeamContext)

    const handleBreadcrumMemberChange = () => {
        setTeamMemberId(null);
    };

    const handleBreadcrumTeamChange = () => {
        setTeamMemberId(null);
        setTeamId(null)
    };

    const { error: memberError, loading: memberLoading, data: memberData } = useQuery(GET_USER, {variables : {id: teamMemberId}});

    const { error: teamError, loading: teamLoading, data: teamData } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});

    if (memberLoading || teamLoading) return <CircularProgress />

    if (memberError || teamError) return null

    return (
        <ContentGrid>
            <Grid item>
                <TopGrid>
                    <Grid item>
                        <BreadcrumbGrid>
                            <Grid item>
                                <Button
                                    size='small'
                                    onClick={handleBreadcrumTeamChange}
                                >
                                    Teams &nbsp;>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    size='small'
                                    onClick={handleBreadcrumMemberChange}
                                >
                                    {teamData.team.prefix} &nbsp;>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='body2'
                                >
                                    {memberData.user.name}
                                </Typography>
                            </Grid>
                        </BreadcrumbGrid>
                    </Grid>
                    <Grid item>
                        <HeaderGrid>
                            <Grid item>
                                <TitleContainer>
                                    <Title>
                                        Project:&nbsp;{memberData.user.name}
                                    </Title>
                                </TitleContainer>
                            </Grid>
                        </HeaderGrid>
                    </Grid>
                </TopGrid>
            </Grid>
        </ContentGrid>
    );

};

export default Member;
