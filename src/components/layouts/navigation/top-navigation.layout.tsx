import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

type ITopNavigationLayoutProps = object

const TopNavigationBar = (): React.ReactElement => (
  <TopNavigation
    accessoryLeft={() => <TopNavigationAction icon={<Icon name="arrow-back" />} />}
    title="Eva Application"
  />
)

const TopNavigationLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationBar />
    </SafeAreaView>
  )
}

export default TopNavigationLayout

const styles = StyleSheet.create({})
