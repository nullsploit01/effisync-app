import { NavigationProp } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import MenuIcon from 'src/components/atoms/menu/menu-icon.atom'
import TopNavigationLayout from 'src/components/layouts/navigation/top-navigation.layout'
import { useAuthContext } from 'src/hooks/use-auth-context.hook'

type IHomePageProps = {
  navigation: NavigationProp<any, any>
}

const HomePage: FC<IHomePageProps> = ({ navigation }) => {
  const { user } = useAuthContext()

  if (!user) {
    throw new Error('User is not defined')
  }

  return (
    <TopNavigationLayout title="Home" accessoryRight={() => <MenuIcon user={user} />}>
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
