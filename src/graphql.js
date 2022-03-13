import {gql} from "apollo-boost";

export const listTeams = gql`
    {
        teams {
            prefix,
            name
        }
    }
`;
