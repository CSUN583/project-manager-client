import {useContext} from 'react';
import {LayoutContext} from "./Layout";
import Teams from "./Teams";
import Projects from "./Projects";
import Tickets from "./Tickets";

const Pages = () => {
    const [layout] = useContext(LayoutContext)

    switch (layout) {
        case 'teams':
            return <Teams/>
        case 'projects':
            return <Projects/>
        case 'tickets':
            return <Tickets/>
        default:
            return null
    }
};

export default Pages;
