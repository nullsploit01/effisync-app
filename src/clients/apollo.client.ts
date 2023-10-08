import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { Environment } from 'src/config/environment.config'
import { storageKeys } from 'src/constants/storage.constants'
import { storageService } from 'src/services/storage.service'

const httpLink = createHttpLink({
  uri: Environment.ServerUrl
})

const authLink = setContext(async (_, { headers }) => {
  const { token } = await storageService.get(storageKeys.auth.token)
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ''
    }
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
