import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Open up App.js too start working on your app!</Text>
      </View>
    </SafeAreaProvider>
  )
}
