import {useContext} from "react";
import {TeamContext} from "./TeamsPage";
import Teams from "./Teams";
import Team from "./Team";
import TeamProject from "./TeamProject";
import TeamMember from "./TeamMember";
import TeamProjectTicket from "./TeamProjectTicket";

const TeamsPageNavigation = () => {
    const {teamId, teamProjectId, teamMemberId, teamTicketId } = useContext(TeamContext)

    if (teamId == null) return <Teams />

    if (teamProjectId == null && teamMemberId == null) return <Team />

    if (teamTicketId != null) return <TeamProjectTicket />

    if (teamProjectId != null) return <TeamProject />

    if (teamMemberId != null) return <TeamMember />

    return null
};

export default TeamsPageNavigation;
