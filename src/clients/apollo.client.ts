import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { Environment } from 'src/config/environment.config'
import { storageKeys } from 'src/constants/storage.constants'
import { storageService } from 'src/services/storage.service'

const httpLink = createHttpLink({
  uri: Environment.ServerUrl
})

const authLink = setContext(async (_, { headers }) => {
  const cachedData = await storageService.get(storageKeys.auth.token)
  return {
    headers: {
      ...headers,
      authorization: cachedData?.token ? `${cachedData.token}` : ''
    }
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
