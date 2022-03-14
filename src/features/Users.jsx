import { Container, Grid, Typography} from "@mui/material";
import AddUserModal from "./AddUserModal";
import UsersList from "./UsersList";
import {useQuery} from "@apollo/react-hooks";
import {LIST_USERS} from "../gql";


const Users = () => {
    const { error, loading, data, refetch } = useQuery(LIST_USERS);

    return (
        <Container
            disableGutters
        >
            <Grid
                container
                direction='column'
                spacing={1}
            >
                <Grid item>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Grid item>
                            <Typography
                                variant='h3'
                            >
                                Users
                            </Typography>
                        </Grid>
                        <Grid item>
                            <AddUserModal refetch={refetch}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <UsersList error={error} loading={loading} data={data}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Users;
