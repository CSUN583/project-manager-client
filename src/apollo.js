import ApolloClient, {InMemoryCache} from 'apollo-boost';

export const Apollo = new ApolloClient({
    uri: 'https://csun583-project-manager.herokuapp.com/graphql',
    cache: new InMemoryCache()
});
