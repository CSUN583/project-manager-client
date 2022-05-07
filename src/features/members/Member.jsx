import {useContext} from "react";
import {TeamContext} from "../teams/TeamsContext";
import {useQuery} from "@apollo/react-hooks";
import {GET_TEAM_NAME, GET_USER} from "../../gql";
import {CircularProgress} from "@mui/material";
import ContentLayout from "../layout/ContentLayout";

const Member = () => {
    const {teamId, setTeamId, teamMemberId, setTeamMemberId} = useContext(TeamContext)

    const handleBreadcrumMemberChange = () => {
        setTeamMemberId(null);
    };

    const handleBreadcrumTeamChange = () => {
        setTeamMemberId(null);
        setTeamId(null)
    };

    const {
        error: memberError,
        loading: memberLoading,
        data: memberData
    } = useQuery(GET_USER, {variables: {id: teamMemberId}});

    const {error: teamError, loading: teamLoading, data: teamData} = useQuery(GET_TEAM_NAME, {variables: {id: teamId}});

    if (memberLoading || teamLoading) return <CircularProgress/>

    if (memberError || teamError) return null

    return (
        <ContentLayout
            breadcrumb={[
                {
                    'onClick': handleBreadcrumTeamChange,
                    'text': 'Teams'
                },
                {
                    'onClick': handleBreadcrumMemberChange,
                    'text': `${teamData?.team?.prefix}`
                },
                {
                    'text': memberData?.user?.name,
                    'disabled': true
                }
            ]}
            title={`Project: ${memberData?.user?.name}`}
        />
    );
};

export default Member;
