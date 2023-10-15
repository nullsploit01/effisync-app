import { NavigationProp } from '@react-navigation/native'
import { Button, Divider, Icon, Layout, Text } from '@ui-kitten/components'
import { FC, useState } from 'react'
import { StyleSheet } from 'react-native'

import MenuIcon from 'src/components/atoms/menu/menu-icon.atom'
import TopNavigationLayout from 'src/components/layouts/navigation/top-navigation.layout'
import { useTaskContext } from 'src/hooks/use-task-context.hook'
import { IUser } from 'src/interfaces/user'

import CreateTaskModal from './components/create-task/create-task-modal.component'
import TaskAddedModal from './components/create-task/task-added-modal.component'
import TasksList from './components/tasks-list/tasks-list.component'

type IHomePageProps = {
  navigation: NavigationProp<any, any>
  user: IUser
}

const HomePage: FC<IHomePageProps> = ({ navigation, user }) => {
  const { tasks } = useTaskContext()

  const [_showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false)
  const [_showTaskAddedModal, setShowTaskAddedModal] = useState<boolean>(false)

  return (
    <TopNavigationLayout title="Home" accessoryRight={() => <MenuIcon user={user} />}>
      <Layout style={styles.container}>
        <CreateTaskModal
          visible={_showAddTaskModal}
          setVisible={setShowAddTaskModal}
          onTaskCreated={() => setShowTaskAddedModal(true)}
        />
        <Layout style={styles.tasksContainer}>
          {tasks.length ? <TasksList /> : <Text>No Tasks Found </Text>}
        </Layout>
        <Divider />
        <Layout style={styles.footer}>
          <Button
            size="large"
            appearance="ghost"
            onPress={() => setShowAddTaskModal(true)}
            accessoryRight={<Icon name="plus-circle-outline" />}
          >
            Add Task
          </Button>
        </Layout>
        <TaskAddedModal
          visible={_showTaskAddedModal}
          onBackdropPress={() => setShowTaskAddedModal(false)}
        />
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
  },
  tasksContainer: { flex: 1, marginVertical: 10 }
})
