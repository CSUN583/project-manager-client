import {useQuery} from "@apollo/react-hooks";
import {useContext} from "react";
import {TeamContext} from "../TeamsContext";
import {LIST_TEAM_PROJECTS} from "../../../gql";
import ProjectModal from "./ProjectModal";
import LoadingCircle from "../../components/LoadingCircle";
import ListLayout from "../../layout/ListLayout";


const ProjectsList = () => {
    const {teamId, setTeamProjectId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamProjectId(id)
    }

    const {error, loading, data, refetch} = useQuery(LIST_TEAM_PROJECTS, {variables: {id: teamId}});

    if (loading) return <LoadingCircle/>

    if (error) return null

    return (
        <ListLayout
            headerColumns={[
                {
                    'width': 130,
                    'text': 'Name',
                },
                {
                    'width': 60,
                    'text': 'Start',
                },
                {
                    'width': 60,
                    'text': 'End',
                },
            ]}
            modal={<ProjectModal refetch={refetch}/>}
            data={data?.team?.projects?.map(project => {
                return {
                    'columns': [
                        {
                            'width': 130,
                            'text': project.name
                        },
                        {
                            'width': 60,
                            'text': project.startTime
                        },
                        {
                            'width': 60,
                            'text': project.endTime
                        },
                    ],
                    'onClick': () => handleClick(project.id)
                }
            })}
        />
    );
};

export default ProjectsList;
