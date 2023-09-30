import { ApolloClient, InMemoryCache } from '@apollo/client'

import { Environment } from 'src/config/environment.config'

export const apolloClient = new ApolloClient({
  uri: Environment.ServerUrl,
  cache: new InMemoryCache()
})
