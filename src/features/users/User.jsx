import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import {useQuery} from "@apollo/react-hooks";
import Button from "@mui/material/Button";
import {UserContext} from "./UsersPage";
import UserInformation from "./UserInformation";
import {GET_USER} from "../../gql";

const User = () => {
    const [userId, setUserId] = useContext(UserContext)

    const handleBreadcrumChange = () => {
        setUserId(null);
    };

    const { error, loading, data } = useQuery(GET_USER, {variables: {id: userId}});

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
                                variant='body2'
                            >
                                {data.user.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction='column'
                        spacing={3}
                    >
                        <Grid item>
                            <Box ml={1}>
                                <Typography variant='h5'>
                                    User:&nbsp;{data.user.name}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <UserInformation userData={data}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default User;
