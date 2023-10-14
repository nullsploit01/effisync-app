import { useMutation } from '@apollo/client'
import { createContext, FC, useState } from 'react'

import { CreateTaskMutation } from 'src/graphql/task/mutation'
import { ITask } from 'src/interfaces/task'

import {
  ICreateTask,
  IDeleteTask,
  IGetTasks,
  ITaskContext,
  ITaskProviderProps,
  IUpdateTask
} from './interface'

export const TaskContext = createContext<ITaskContext>({} as ITaskContext)

export const TaskContextProvider: FC<ITaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const [createTaskAsync] = useMutation(CreateTaskMutation)

  const createTask: ICreateTask = async (task) => {
    const { data } = await createTaskAsync({
      variables: {
        title: task.title,
        description: task.description
      }
    })

    setTasks([...tasks, data.createTask])
    return data.createTask
  }

  const updateTask: IUpdateTask = async (task: ITask) => {
    const index = tasks.findIndex((t) => t.id === task.id)
    tasks[index] = task
    setTasks([...tasks])
    return task
  }

  const deleteTask: IDeleteTask = async (id) => {
    const index = tasks.findIndex((t) => t.id === id)
    const task = tasks[index]
    tasks.splice(index, 1)
    setTasks([...tasks])
    return task
  }

  const getTasks: IGetTasks = async () => {
    return tasks
  }

  return (
    <TaskContext.Provider value={{ createTask, updateTask, deleteTask, getTasks, tasks }}>
      {children}
    </TaskContext.Provider>
  )
}
