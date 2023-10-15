import { Button, Icon, Input, Layout, Tooltip } from '@ui-kitten/components'
import { FC, useState } from 'react'
import { StyleSheet } from 'react-native'

import EModal from 'src/components/molecules/modal/emodal.molecule'
import { useTaskContext } from 'src/hooks/use-task-context.hook'
import { ITask } from 'src/interfaces/task'

type ICreateTaskModalProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
  onTaskCreated?: () => void
}

const CreateTaskModal: FC<ICreateTaskModalProps> = ({ visible, setVisible, onTaskCreated }) => {
  const { createTask } = useTaskContext()

  const [_createTaskFormValues, setCreateTaskFormValues] = useState<ITask>({} as ITask)
  const [_showValidationError, setShowValidationError] = useState<{ task: boolean }>({
    task: false
  })

  const handleAddTask = () => {
    if (!_createTaskFormValues.title) {
      setShowValidationError({ ..._showValidationError, task: true })
      return
    }

    setShowValidationError({ ..._showValidationError, task: false })
    createTask(_createTaskFormValues).then(() => {
      setVisible(false)
      onTaskCreated && onTaskCreated()
    })
  }

  const onBackdropPress = () => {
    setVisible(false)
    setShowValidationError({ ..._showValidationError, task: false })
    setCreateTaskFormValues({} as ITask)
  }

  return (
    <EModal visible={visible} onBackdropPress={onBackdropPress}>
      <Layout style={styles.container}>
        <Tooltip
          anchor={() => (
            <Input
              value={_createTaskFormValues.title}
              status={_showValidationError.task ? 'danger' : 'basic'}
              style={styles.inputField}
              placeholder="Title"
              onChange={(value) =>
                setCreateTaskFormValues({
                  ..._createTaskFormValues,
                  title: value.nativeEvent.text
                })
              }
            />
          )}
          visible={_showValidationError.task}
          onBackdropPress={() => {
            setShowValidationError({ ..._showValidationError, task: false })
          }}
        >
          Title is required
        </Tooltip>
        <Input
          value={_createTaskFormValues.description}
          multiline={true}
          numberOfLines={4}
          style={styles.inputField}
          placeholder="Description"
          onChange={(value) =>
            setCreateTaskFormValues({
              ..._createTaskFormValues,
              description: value.nativeEvent.text
            })
          }
        />
        <Layout style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
          <Button
            appearance="ghost"
            status="info"
            size="large"
            accessoryRight={<Icon name="plus-circle-outline" />}
            onPress={handleAddTask}
          >
            Add Task
          </Button>
        </Layout>
      </Layout>
    </EModal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250
  },
  inputField: {
    marginVertical: 5
  }
})

export default CreateTaskModal
