import { Button, Icon, ListItem } from '@ui-kitten/components'
import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native'

import { ITask } from 'src/interfaces/task'

type ITasksListItemProps = {
  item: ITask
}

const TasksListItem = ({ item }: { item: ITask }): ReactElement => {
  return (
    <ListItem
      key={item.id}
      title={item.title}
      description={item.description}
      accessoryRight={<Button appearance="ghost" accessoryRight={<Icon name="done-all" />} />}
    />
  )
}

export default TasksListItem

const styles = StyleSheet.create({})
