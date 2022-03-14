import { Container, Grid, Typography} from "@mui/material";
import UsersList from "./UsersList";


const Users = () => {

    return (
        <Container
            disableGutters
        >
            <Grid
                container
                direction='column'
            >
                <Grid item>
                    <Typography
                        variant='h3'
                    >
                        Users
                    </Typography>
                </Grid>
                <Grid item>
                    <UsersList />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Users;
