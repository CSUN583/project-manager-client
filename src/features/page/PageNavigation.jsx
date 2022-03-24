import {useContext} from 'react';
import {LayoutContext} from "./Page";
import UsersContext from "../users/UsersContext";
import TeamsContext from "../teams/TeamsContext";


const PageNavigation = () => {

    const [layout] = useContext(LayoutContext)

    switch (layout) {
        case 'teams':
            return <TeamsContext/>
        case 'users':
            return <UsersContext/>
        default:
            return null
    }
};

export default PageNavigation;
