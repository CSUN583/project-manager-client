import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {TeamContext} from "./TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import Button from "@mui/material/Button";
import MembersList from "./members/MembersList";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import {GET_TEAM_NAME} from "../../gql";
import ProjectsList from "./projects/ProjectsList";
import ContentGrid from "../components/ContentGrid";
import TopGrid from "../components/TopGrid";
import BreadcrumbGrid from "../components/BreadcrumbGrid";
import HeaderGrid from "../components/HeaderGrid";
import TitleContainer from "../components/TitleContainer";
import Title from "../components/Title";
import HeaderNavContainer from "../components/HeaderNavContainer";

const Team = () => {
    const {teamId, setTeamId} = useContext(TeamContext)

    const [navigation, setNavigation] = useState('projects')

    const handleNavigationChange = (event, newValue) => {
        setNavigation(newValue);
    };

    const handleBreadcrumChange = () => {
        setTeamId(null);
    };

    const { error, loading, data } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <ContentGrid>
            <Grid item>
                <TopGrid>
                    <Grid item>
                        <BreadcrumbGrid>
                            <Grid item>
                                <Button
                                    size='small'
                                    onClick={handleBreadcrumChange}
                                >
                                    Teams &nbsp;>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='body2'
                                >
                                    {data.team.prefix}
                                </Typography>
                            </Grid>
                        </BreadcrumbGrid>
                    </Grid>
                    <Grid item>
                        <HeaderGrid>
                            <Grid item>
                                <TitleContainer>
                                    <Title>
                                        Team:&nbsp;{data.team.prefix}
                                    </Title>
                                </TitleContainer>
                            </Grid>
                            <Grid item>
                                <HeaderNavContainer>
                                    <BottomNavigation
                                        showLabels
                                        value={navigation}
                                        onChange={handleNavigationChange}
                                    >
                                        <BottomNavigationAction
                                            label="Projects"
                                            value="projects"
                                        />
                                        <BottomNavigationAction
                                            label="Members"
                                            value="members"
                                        />
                                    </BottomNavigation>
                                </HeaderNavContainer>
                            </Grid>
                        </HeaderGrid>
                    </Grid>
                </TopGrid>
            </Grid>
            <Grid item>
                {navigation === 'projects' ? <ProjectsList/> : <MembersList />}
            </Grid>
        </ContentGrid>
    )
};

export default Team;
