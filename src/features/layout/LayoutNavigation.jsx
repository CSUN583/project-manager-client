import {useContext} from 'react';
import {LayoutContext} from "./Layout";
import UsersContext from "../users/UsersContext";
import TeamsContext from "../teams/TeamsContext";


const LayoutNavigation = () => {

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

export default LayoutNavigation;
