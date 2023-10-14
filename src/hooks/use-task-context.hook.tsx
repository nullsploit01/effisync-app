import { useContext } from 'react'

import { TaskContext } from 'src/context/task/task.context'

export const useTaskContext = () => {
  const taskContext = useContext(TaskContext)

  if (!taskContext) {
    throw new Error('useTaskContext must be used within an TaskProvider')
  }

  return taskContext
}
