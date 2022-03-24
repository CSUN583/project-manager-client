import {useContext} from "react";
import {TeamContext} from "../TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {GET_PROJECT_INFO, GET_TEAM_NAME} from "../../../gql";
import TicketsList from "./tickets/TicketsList";
import ProjectInfo from "./ProjectInfo";
import LoadingCircle from "../../components/LoadingCircle";
import ContentLayout from "../../components/ContentLayout";


const Project = () => {
    const {teamId, setTeamId, teamProjectId, setTeamProjectId} = useContext(TeamContext)

    const handleBreadcrumbProjectChange = () => {
        setTeamProjectId(null);
    };

    const handleBreadcrumbTeamChange = () => {
        setTeamProjectId(null);
        setTeamId(null)
    };

    const {
        error: projectError,
        loading: projectLoading,
        data: projectData
    } = useQuery(GET_PROJECT_INFO, {variables: {id: teamProjectId}});

    const {error: teamError, loading: teamLoading, data: teamData} = useQuery(GET_TEAM_NAME, {variables: {id: teamId}});

    if (projectLoading || teamLoading) return <LoadingCircle/>

    if (projectError || teamError) return null

    return (
        <ContentLayout
            breadcrumb={[
                {
                    'onClick': handleBreadcrumbTeamChange,
                    'text': 'Teams >'
                },
                {
                    'onClick': handleBreadcrumbProjectChange,
                    'text': `${teamData?.team?.prefix} >`
                },
                {
                    'text': projectData?.project?.name,
                    'disabled': true
                }
            ]}
            title={`Project: ${projectData.project.name}`}
            info={<ProjectInfo projectData={projectData}/>}
            list={<TicketsList/>}
        />
    )
}

export default Project;
