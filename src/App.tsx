import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Home Screen!</Text>
      </View>
    </SafeAreaProvider>
  )
}
