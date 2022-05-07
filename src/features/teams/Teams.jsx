import TeamsList from "./TeamsList";
import ContentLayout from "../layout/ContentLayout";


const Teams = () => {
    return (
        <ContentLayout
            title='Teams'
            list={<TeamsList />}
        />
    )
};

export default Teams;
