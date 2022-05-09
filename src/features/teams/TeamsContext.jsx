import {createContext, useState} from "react";
import TeamsNavigation from "./TeamsNavigation";

export const TeamContext = createContext([]);

const TeamsContext = () => {
    const [teamId, setTeamId] = useState(null);
    const [teamProjectId, setTeamProjectId] = useState(null);
    const [teamMemberId, setTeamMemberId] = useState(null);
    const [teamTicketId, setTeamTicketId] = useState(null)

    return (
        <TeamContext.Provider value={{
            teamId, setTeamId,
            teamProjectId, setTeamProjectId,
            teamMemberId, setTeamMemberId,
            teamTicketId, setTeamTicketId,
        }}>
            <TeamsNavigation />
        </TeamContext.Provider>
    )
};

export default TeamsContext;
