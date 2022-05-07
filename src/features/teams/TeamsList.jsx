import {useContext} from "react";
import {TeamContext} from "./TeamsContext";
import TeamModal from "./TeamModal";
import {useQuery} from "@apollo/react-hooks";
import {LIST_TEAMS} from "../../gql";
import LoadingCircle from "../components/LoadingCircle";
import ListLayout from "../layout/ListLayout";


const TeamsList = () => {
    const {setTeamId} = useContext(TeamContext)

    const handleClick = (id) => {
        setTeamId(id)
    }

    const {error, loading, data, refetch} = useQuery(LIST_TEAMS);

    if (loading) return <LoadingCircle/>

    if (error) return null

    return (
        <ListLayout
            headerColumns={[
                {
                    'width': 100,
                    'text': 'Prefix',
                },
                {
                    'width': 150,
                    'text': 'Name',
                },
            ]}
            modal={<TeamModal refetch={refetch}/>}
            data={data?.teams?.map(team => {
                return {
                    'columns': [
                        {
                            'width': 100,
                            'text': team.prefix
                        },
                        {
                            'width': 150,
                            'text': team.name
                        },
                    ],
                    'onClick': () => handleClick(team.id)
                }
            })}
        />
    );
};

export default TeamsList;
