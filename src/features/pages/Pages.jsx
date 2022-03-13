import {useContext} from 'react';
import {LayoutContext} from "../Layout";
import HomePage from "./HomePage";
import TeamsPage from "./TeamsPage";
import ProjectsPage from "./ProjectsPage";
import TicketsPage from "./TicketsPage";

const Pages = () => {
    const [layout] = useContext(LayoutContext)

    switch (layout) {
        case 'home':
            return <HomePage/>
        case 'teams':
            return <TeamsPage/>
        case 'projects':
            return <ProjectsPage/>
        case 'tickets':
            return <TicketsPage/>
        default:
            return null
    }
};

export default Pages;
