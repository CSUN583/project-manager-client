import {useQuery} from "@apollo/react-hooks";
import {useContext} from "react";
import {TeamContext} from "../teams/TeamsContext";
import {LIST_TEAM_PROJECTS} from "../../gql";
import ProjectModal from "./ProjectModal";
import LoadingCircle from "../components/LoadingCircle";
import ListLayout from "../layout/ListLayout";


const ProjectsList = () => {
    const {teamId, setTeamProjectId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamProjectId(id)
    }

    const {error, loading, data} = useQuery(LIST_TEAM_PROJECTS, {variables: {id: teamId}});

    if (loading) return <LoadingCircle/>

    if (error) return null

    return (
        <ListLayout
            headerColumns={[
                {
                    'width': 150,
                    'text': 'Name',
                },
                {
                    'width': 100,
                    'text': 'End Date',
                },
            ]}
            modal={<ProjectModal/>}
            data={data?.team?.projects?.map(project => {
                return {
                    'columns': [
                        {
                            'width': 150,
                            'text': project.name
                        },
                        {
                            'width': 100,
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
