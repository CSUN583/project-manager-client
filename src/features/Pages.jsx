import {useContext} from 'react';
import {LayoutContext} from "./Layout";
import UsersPage from "./users/UsersPage";
import TeamsPage from "./teams/TeamsPage";


const Pages = () => {

    const [layout] = useContext(LayoutContext)

    switch (layout) {
        case 'teams':
            return <TeamsPage/>
        case 'users':
            return <UsersPage/>
        default:
            return null
    }
};

export default Pages;
