import { NavigationProp } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import TopNavigationLayout from 'src/components/layouts/navigation/top-navigation.layout'

type IHomePageProps = {
  navigation: NavigationProp<any, any>
}

const HomePage: FC<IHomePageProps> = ({ navigation }) => {
  return (
    <TopNavigationLayout title="Home">
      <Layout style={styles.container}>
        <Text>Home Page</Text>
      </Layout>
    </TopNavigationLayout>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
