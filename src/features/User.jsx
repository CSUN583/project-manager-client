import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import Button from "@mui/material/Button";
import {UserContext} from "./UsersPage";

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
                                onClick={handleBreadcrumChange}
                            >
                                Users
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography>
                                > {data.user.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box ml={1}>
                        <Typography variant='h3'>
                            User: {data.user.name}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default User;
