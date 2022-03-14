import {createContext, useState} from "react";
import TeamsPageNavigation from "./TeamsPageNavigation";

export const TeamContext = createContext([]);

const TeamsPage = () => {
    const [teamId, setTeamId] = useState(null);
    const [teamProjectId, setTeamProjectId] = useState(null);
    const [teamMemberId, setTeamMemberId] = useState(null);
    const [teamTicketId, setTeamTicketId] = useState(null)

    return (
        <TeamContext.Provider value={{
            teamId, setTeamId,
            teamProjectId, setTeamProjectId,
            teamMemberId, setTeamMemberId,
            teamTicketId, setTeamTicketId
        }}>
            <TeamsPageNavigation />
        </TeamContext.Provider>
    )
};

export default TeamsPage;
