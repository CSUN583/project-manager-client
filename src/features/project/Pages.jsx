import {useContext} from 'react';
import {LayoutContext} from "../Layout";
import ProjectsPage from "./ProjectsPage";
import Tickets from "../Tickets";
import TeamsPage from "../team/TeamsPage";


const Pages = () => {

    const [layout] = useContext(LayoutContext)

    switch (layout) {
        case 'teams':
            return <TeamsPage/>
        case 'projects':
            return <ProjectsPage/>
        case 'tickets':
            return <Tickets/>
        default:
            return null
    }
};

export default Pages;
