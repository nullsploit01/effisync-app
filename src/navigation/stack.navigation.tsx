import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Fragment } from 'react'

import { screenNames } from 'src/constants/navigation.constants'
import { useAuthContext } from 'src/hooks/use-auth-context.hook'
import LoginScreen from 'src/screens/auth/login.screen'
import RegisterScreen from 'src/screens/auth/register.screen'
import HomeScreen from 'src/screens/home/home.screen'

const StackNavigation = () => {
  const { user } = useAuthContext()
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name={screenNames.home} component={HomeScreen} />
      ) : (
        <Fragment>
          <Stack.Screen
            name={screenNames.auth.login}
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenNames.auth.register}
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Fragment>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation
