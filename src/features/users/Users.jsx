import UsersList from "./UsersList";
import ContentLayout from "../components/ContentLayout";


const Users = () => {
    return (
        <ContentLayout
            title={'Users'}
            list={<UsersList />}
        />
    )
};

export default Users;
