import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import LoginScreen from 'src/screens/auth/login.screen'
import RegisterScreen from 'src/screens/auth/register.screen'

const StackNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigation
