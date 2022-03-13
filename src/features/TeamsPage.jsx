import {createContext, useState} from 'react';
import Teams from "./Teams";
import Team from "./Team";

export const TeamContext = createContext([]);

const TeamsPage = () => {
    const [team, setTeam] = useState('test')

    return (
        <TeamContext.Provider value={[team, setTeam]}>
            {team ? <Team /> : <Teams />}
        </TeamContext.Provider>
    )
};

export default TeamsPage;
