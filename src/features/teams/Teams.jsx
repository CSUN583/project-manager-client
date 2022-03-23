import { Container, Grid, Typography} from "@mui/material";
import TeamsList from "./TeamsList";
import ContentGrid from "../components/ContentGrid";
import TopGrid from "../components/TopGrid";
import HeaderGrid from "../components/HeaderGrid";
import Title from "../components/Title";
import TitleContainer from "../components/TitleContainer";


const Teams = () => {

    return (
        <ContentGrid>
            <Grid item>
                <TopGrid>
                    <Grid item>
                        <HeaderGrid>
                            <Grid item>
                                <TitleContainer>
                                    <Title>
                                        Teams
                                    </Title>
                                </TitleContainer>
                            </Grid>
                        </HeaderGrid>
                    </Grid>
                    <Grid item>
                        <TeamsList />
                    </Grid>
                </TopGrid>
            </Grid>
        </ContentGrid>
    );
};

export default Teams;
