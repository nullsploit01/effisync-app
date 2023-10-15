import { Layout, List } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native'

import { useTaskContext } from 'src/hooks/use-task-context.hook'

import TasksListItem from './tasks-list-item.component'

const TasksList = () => {
  const { tasks } = useTaskContext()

  return (
    <Layout>
      <List data={tasks} renderItem={TasksListItem} />
    </Layout>
  )
}

export default TasksList

const styles = StyleSheet.create({})
