import { Container, Grid, Typography} from "@mui/material";
import UsersList from "./UsersList";
import ContentGrid from "../components/ContentGrid";
import TopGrid from "../components/TopGrid";
import HeaderGrid from "../components/HeaderGrid";
import TitleContainer from "../components/TitleContainer";
import Title from "../components/Title";


const Users = () => {

    return (
        <ContentGrid>
            <Grid>
                <TopGrid>
                    <Grid item>
                        <HeaderGrid>
                            <Grid item>
                                <TitleContainer>
                                    <Title>
                                        Users
                                    </Title>
                                </TitleContainer>
                            </Grid>
                        </HeaderGrid>
                    </Grid>
                </TopGrid>
            </Grid>
            <Grid item>
                <UsersList />
            </Grid>
        </ContentGrid>
    );
};

export default Users;
