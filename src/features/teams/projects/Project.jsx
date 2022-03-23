import {useContext, useState} from "react";
import {TeamContext} from "../TeamsContext";
import {Box, CircularProgress, Container, Divider, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {useQuery} from "@apollo/react-hooks";
import {GET_PROJECT_INFO, GET_TEAM_NAME} from "../../../gql";
import TicketsList from "./tickets/TicketsList";
import ProjectInfo from "./ProjectInfo";
import LoadingCircle from "../../components/LoadingCircle";
import ContentGrid from "../../components/ContentGrid";
import TopGrid from "../../components/TopGrid";
import BreadcrumbGrid from "../../components/BreadcrumbGrid";
import HeaderGrid from "../../components/HeaderGrid";
import TitleContainer from "../../components/TitleContainer";
import Title from "../../components/Title";


const Project = () => {
    const {teamId, setTeamId, teamProjectId, setTeamProjectId} = useContext(TeamContext)

    const handleBreadcrumProjectChange = () => {
        setTeamProjectId(null);
    };

    const handleBreadcrumTeamChange = () => {
        setTeamProjectId(null);
        setTeamId(null)
    };

    const { error: projectError, loading: projectLoading, data: projectData } = useQuery(GET_PROJECT_INFO, {variables : {id: teamProjectId}});
    const { error: teamError, loading: teamLoading, data: teamData } = useQuery(GET_TEAM_NAME, {variables : {id: teamId}});
    if (projectLoading || teamLoading) return <LoadingCircle />
    if (projectError || teamError) return null

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
                                    onClick={handleBreadcrumProjectChange}
                                >
                                    {teamData.team.prefix} &nbsp;>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='body2'
                                >
                                    {projectData.project.name}
                                </Typography>
                            </Grid>
                        </BreadcrumbGrid>
                    </Grid>
                    <Grid item>
                        <HeaderGrid>
                            <Grid item>
                                <TitleContainer>
                                    <Title>
                                        Project:&nbsp;{projectData.project.name}
                                    </Title>
                                </TitleContainer>
                            </Grid>
                        </HeaderGrid>
                    </Grid>
                </TopGrid>
            </Grid>
            <Grid item>
                <ProjectInfo projectData={projectData}/>
            </Grid>
            <Grid item>
                <TicketsList/>
            </Grid>
        </ContentGrid>
    );

};

export default Project;
