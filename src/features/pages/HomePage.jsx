import {Apollo} from "../../apollo";
import {gql} from "apollo-boost";

const HomePage = () => {

    Apollo.query({
        query: gql`
            {
                users {
                    name
                }
            }
        `
    })
    .then(result => console.log(result));

    return (
        <div>
            HomePage
        </div>
    );
};

export default HomePage;
