import {CircularProgress} from "@mui/material";
import {useContext} from "react";
import {useQuery} from "@apollo/react-hooks";
import {UserContext} from "./UsersContext";
import UserInformation from "./UserInformation";
import {GET_USER} from "../../gql";
import ContentLayout from "../components/ContentLayout";

const User = () => {
    const [userId, setUserId] = useContext(UserContext)

    const handleBreadcrumChange = () => {
        setUserId(null);
    };

    const {error, loading, data} = useQuery(GET_USER, {variables: {id: userId}});

    if (loading) return <CircularProgress/>

    if (error) return null

    return (
        <ContentLayout
            breadcrumb={[
                {
                    'onClick': handleBreadcrumChange,
                    'text': 'Users >'
                },
                {
                    'text': data.user.name,
                    'disabled': true
                }
            ]}
            title={`User: ${data.user.name}`}
            list={<UserInformation userData={data}/>}
        />
    )
};

export default User;
