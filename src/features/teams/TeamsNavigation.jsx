import {useContext} from "react";
import {TeamContext} from "./TeamsContext";
import Teams from "./Teams";
import Team from "./Team";
import Project from "../projects/Project";
import Member from "../members/Member";
import Ticket from "../tickets/Ticket";

const TeamsNavigation = () => {
    const {teamId, teamProjectId, teamMemberId, teamTicketId } = useContext(TeamContext)

    if (teamId == null) return <Teams />

    if (teamProjectId == null && teamMemberId == null) return <Team />

    if (teamTicketId != null) return <Ticket />

    if (teamProjectId != null) return <Project />

    if (teamMemberId != null) return <Member />

    return null
};

export default TeamsNavigation;
