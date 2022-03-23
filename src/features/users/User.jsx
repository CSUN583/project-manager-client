import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useContext} from "react";
import {useQuery} from "@apollo/react-hooks";
import Button from "@mui/material/Button";
import {UserContext} from "./UsersContext";
import UserInformation from "./UserInformation";
import {GET_USER} from "../../gql";
import ContentGrid from "../components/ContentGrid";
import TopGrid from "../components/TopGrid";
import BreadcrumbGrid from "../components/BreadcrumbGrid";
import HeaderGrid from "../components/HeaderGrid";
import TitleContainer from "../components/TitleContainer";
import Title from "../components/Title";

const User = () => {
    const [userId, setUserId] = useContext(UserContext)

    const handleBreadcrumChange = () => {
        setUserId(null);
    };

    const { error, loading, data } = useQuery(GET_USER, {variables: {id: userId}});

    if (loading) return <CircularProgress />

    if (error) return null

    return (
        <ContentGrid>
            <Grid>
                <TopGrid>
                    <Grid item>
                        <BreadcrumbGrid>
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
                        </BreadcrumbGrid>
                    </Grid>
                    <Grid item>
                        <HeaderGrid>
                            <Grid item>
                                <TitleContainer>
                                    <Title>
                                        User:&nbsp;{data.user.name}
                                    </Title>
                                </TitleContainer>
                            </Grid>
                        </HeaderGrid>
                    </Grid>
                </TopGrid>
            </Grid>
            <Grid item>
                <UserInformation userData={data}/>
            </Grid>
        </ContentGrid>
    )
};

export default User;
