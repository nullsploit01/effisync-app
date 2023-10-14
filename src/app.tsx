import { ApolloProvider } from '@apollo/client'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { apolloClient } from './clients/apollo.client'
import { AuthProvider } from './context/auth/auth.context'
import { TaskContextProvider } from './context/task/task.context'
import StackNavigation from './navigation/stack.navigation'
import { theme } from './theme'

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={apolloClient}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={theme}>
          <SafeAreaProvider>
            <AuthProvider>
              <TaskContextProvider>
                <StackNavigation />
              </TaskContextProvider>
            </AuthProvider>
          </SafeAreaProvider>
        </ApplicationProvider>
      </ApolloProvider>
    </NavigationContainer>
  )
}

export default App
