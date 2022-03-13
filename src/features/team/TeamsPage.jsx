import {createContext, useState} from "react";
import Teams from "./Teams";
import Team from "./Team";

export const TeamContext = createContext([]);

const TeamsPage = () => {
    const [teamId, setTeamId] = useState(null);

    return (
        <TeamContext.Provider value={[teamId, setTeamId]}>
            {teamId == null ? <Teams /> : <Team />}
        </TeamContext.Provider>
    )
};

export default TeamsPage;
