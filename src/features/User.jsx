import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import Button from "@mui/material/Button";
import {UserContext} from "./UsersPage";
import UserInformation from "./UserInformation";

const User = () => {
    const [userId, setUserId] = useContext(UserContext)


    const handleBreadcrumChange = () => {
        setUserId(null);
    };

    const GET_USER = gql`
        {
            user(id: ${userId}) {
                id,
                name,
                email
            }
        }
    `;

    const { error, loading, data } = useQuery(GET_USER);

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <Container
            disableGutters
        >
            <Grid
                container
                direction='column'
            >
                <Grid item>
                    <Grid
                        container
                        alignItems='center'
                    >
                        <Grid item>
                            <Button
                                size='small'
                                onClick={handleBreadcrumChange}
                            >
                                Users &nbsp;>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='caption'
                            >
                                {data.user.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <UserInformation />
                </Grid>
            </Grid>
        </Container>
    )
};

export default User;
