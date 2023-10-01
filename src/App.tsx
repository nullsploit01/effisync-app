import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { apolloClient } from './clients/apollo.client'
import StackNavigation from './navigation/stack.navigation'

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <StackNavigation />
        </SafeAreaProvider>
      </ApolloProvider>
    </NavigationContainer>
  )
}

export default App
