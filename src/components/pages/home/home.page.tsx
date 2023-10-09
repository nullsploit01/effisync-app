import { Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const TopNavigationSimpleUsageShowcase = (): React.ReactElement => (
  <TopNavigation
    accessoryLeft={() => <TopNavigationAction icon={<Icon name="arrow-back" />} />}
    title="Eva Application"
  />
)

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <TopNavigationSimpleUsageShowcase />
        <Text>HomePage</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
