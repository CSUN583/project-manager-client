import {createContext, useState} from "react";
import Users from "./Users";
import User from "./User";

export const UserContext = createContext([]);

const UsersPage = () => {
    const [userId, setUserId] = useState(null);

    return (
        <UserContext.Provider value={[userId, setUserId]}>
            {userId == null ? <Users /> : <User />}
        </UserContext.Provider>
    )
};

export default UsersPage;
