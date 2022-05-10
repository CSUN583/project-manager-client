import {useContext, useEffect, useState} from "react";
import {TeamContext} from "./TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import MembersList from "../members/MembersList";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import {GET_TEAM_NAME} from "../../gql";
import ProjectsList from "../projects/ProjectsList";
import ContentLayout from "../layout/ContentLayout";
import LoadingCircle from "../components/LoadingCircle";
import {SpeechContext} from "../page/Page";

const Team = () => {
    const {teamId, setTeamId} = useContext(TeamContext)
    const {setNavText} = useContext(SpeechContext)

    const [navigation, setNavigation] = useState('projects')

    const {error, loading, data} = useQuery(GET_TEAM_NAME, {variables: {id: teamId}});

    useEffect(() => {
        setNavText(navigation);
        return () => setNavText('');
    }, [setNavText, navigation]);

    const handleNavigationChange = (event, newValue) => {
        setNavigation(newValue);
    };

    const handleBreadcrumChange = () => {
        setTeamId(null);
    };

    if (loading) return <LoadingCircle/>

    if (error) return null

    return (
        <ContentLayout
            breadcrumb={[
                {
                    'onClick': handleBreadcrumChange,
                    'text': 'Teams'
                },
                {
                    'text': data?.team?.prefix,
                    'disabled': true
                }
            ]}
            title={`Team: ${data?.team?.prefix}`}
            headerNav={
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
            }
            list={navigation === 'projects' ? <ProjectsList/> : <MembersList/>}
        />
    )
};

export default Team;
