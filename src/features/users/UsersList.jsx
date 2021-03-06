import {useContext} from "react";
import {UserContext} from "./UsersContext";
import UserModal from "./UserModal";
import {useQuery} from "@apollo/react-hooks";
import {LIST_USERS} from "../../gql";
import ListLayout from "../layout/ListLayout";
import LoadingCircle from "../components/LoadingCircle";


const UsersList = () => {
    // eslint-disable-next-line
    const [userId, setUserId] = useContext(UserContext)

    const handleClick = (id) => {
        setUserId(id)
    }

    const {error, loading, data} = useQuery(LIST_USERS);

    if (loading) return <LoadingCircle/>

    if (error) return null

    return (
        <ListLayout
            headerColumns={[
                {
                    'width': 125,
                    'text': 'Name',
                },
                {
                    'width': 125,
                    'text': 'Email',
                },
            ]}
            modal={<UserModal/>}
            data={data?.users?.map(user => {
                return {
                    'columns': [
                        {
                            'width': 125,
                            'text': user.name
                        },
                        {
                            'width': 125,
                            'text': user.email
                        },
                    ],
                    'onClick': () => handleClick(user.id)
                }
            })}
        />
    );
};

export default UsersList;
