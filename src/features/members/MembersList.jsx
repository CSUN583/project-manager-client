import {useQuery} from "@apollo/react-hooks";
import {useContext} from "react";
import {TeamContext} from "../teams/TeamsContext";
import {LIST_TEAM_MEMBERS} from "../../gql";
import MemberModal from "./MemberModal";
import ListLayout from "../layout/ListLayout";


const MembersList = () => {
    const {teamId, setTeamMemberId} = useContext(TeamContext)

    const {error, loading, data} = useQuery(LIST_TEAM_MEMBERS, {variables: {id: teamId}});

    const handleClick = (id) => {
        setTeamMemberId(id)
    }

    if (error) return null

    return (
        <ListLayout
            disabled
            loading={loading}
            headerColumns={[
                {
                    'width': 125,
                    'text': 'Name',
                },
                {
                    'width': 125,
                    'text': 'Email',
                },
            ]}
            modal={<MemberModal/>}
            data={data?.team?.members?.map(member => {
                return {
                    'columns': [
                        {
                            'width': 125,
                            'text': member.name
                        },
                        {
                            'width': 125,
                            'text': member.email
                        },
                    ],
                    'onClick': () => handleClick(member.id)
                }
            })}
        />
    );
};

export default MembersList;

