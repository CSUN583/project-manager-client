import {Container, Grid, Typography} from "@mui/material";
import AddTeamModal from "../team/AddTeamModal";
import TeamsList from "../team/TeamsList";
import AddProjectModal from "./AddProjectModal";
import ProjectsList from "./ProjectsList";

const Projects = () => {
    return (
        <Container >
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
                            <Typography variant='h2'>
                                Projects
                            </Typography>
                        </Grid>
                        <Grid item>
                            <AddProjectModal />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ProjectsList />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;
