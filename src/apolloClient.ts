import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject>

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql"
    }),
    cache: new InMemoryCache()
  })
}
const initializeApollo = () => {
  apolloClient = apolloClient ?? createApolloClient()
  return apolloClient
}

export const useApollo = () => {
  return initializeApollo()
}
