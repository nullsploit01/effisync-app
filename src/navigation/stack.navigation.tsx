import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import LoginScreen from 'src/screens/auth/login.screen'

const StackNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigation
