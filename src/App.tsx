import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { apolloClient } from './clients/apollo.client'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <View>
          <Text>Home Screen!</Text>
        </View>
      </SafeAreaProvider>
    </ApolloProvider>
  )
}

export default App
