import {useQuery} from "@apollo/react-hooks";
import {useContext} from "react";
import {TeamContext} from "../TeamsContext";
import {LIST_TEAM_MEMBERS} from "../../../gql";
import MemberModal from "./MemberModal";
import ListLayout from "../../layout/ListLayout";


const MembersList = () => {
    const {teamId, setTeamMemberId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamMemberId(id)
    }

    const {error, loading, data, refetch} = useQuery(LIST_TEAM_MEMBERS, {variables: {id: teamId}});

    if (error) return null

    return (
        <ListLayout
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
            modal={<MemberModal refetch={refetch}/>}
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

