import { ApolloProvider } from '@apollo/client'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { apolloClient } from './clients/apollo.client'
import StackNavigation from './navigation/stack.navigation'
import { theme } from './theme'

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={theme}>
          <SafeAreaProvider>
            <StackNavigation />
          </SafeAreaProvider>
        </ApplicationProvider>
      </ApolloProvider>
    </NavigationContainer>
  )
}

export default App
