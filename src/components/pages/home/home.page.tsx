import { NavigationProp } from '@react-navigation/native'
import { Button, Layout, Text } from '@ui-kitten/components'
import { FC, useState } from 'react'
import { StyleSheet } from 'react-native'

import MenuIcon from 'src/components/atoms/menu/menu-icon.atom'
import TopNavigationLayout from 'src/components/layouts/navigation/top-navigation.layout'
import { IUser } from 'src/interfaces/user'

import CreateTaskModal from './components/create-task-modal.component'

type IHomePageProps = {
  navigation: NavigationProp<any, any>
  user: IUser
}

const HomePage: FC<IHomePageProps> = ({ navigation, user }) => {
  const [_showCreateTaskModal, setShowCreateTaskModal] = useState<boolean>(false)

  return (
    <TopNavigationLayout title="Home" accessoryRight={() => <MenuIcon user={user} />}>
      <Layout style={styles.container}>
        <CreateTaskModal visible={_showCreateTaskModal} setVisible={setShowCreateTaskModal} />
        <Layout
          style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>No Tasks Found</Text>
        </Layout>
        <Layout style={styles.footer}>
          <Button size="large" onPress={() => setShowCreateTaskModal(true)}>
            Add
          </Button>
        </Layout>
      </Layout>
    </TopNavigationLayout>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
  }
})
