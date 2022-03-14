import {useContext} from 'react';
import {LayoutContext} from "./Layout";
import UsersPage from "./UsersPage";
import TeamsPage from "./TeamsPage";


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
