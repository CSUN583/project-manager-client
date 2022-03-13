import {createContext, useState} from "react";
import Projects from "./Projects";
import Project from "./Project";

export const ProjectContext = createContext([]);

const ProjectsPage = () => {
    const [projectId, setProjectId] = useState(null);

    return (
        <ProjectContext.Provider value={[projectId, setProjectId]}>
            {projectId == null ? <Projects /> : <Project />}
        </ProjectContext.Provider>
    )
};
export default ProjectsPage;
