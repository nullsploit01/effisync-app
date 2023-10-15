import { useLazyQuery, useMutation } from '@apollo/client'
import { createContext, FC, useEffect } from 'react'

import { CreateTaskMutation } from 'src/graphql/task/mutation'
import { GetTasksQuery } from 'src/graphql/task/query'
import { useTaskReducer } from 'src/hooks/use-task-reducer.hook'
import { ITask } from 'src/interfaces/task'
import { TaskActions } from 'src/reducers/task/interface'

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
  const [{ tasks }, dispatch] = useTaskReducer()

  const [createTaskAsync] = useMutation(CreateTaskMutation)
  const [getTasksAsync] = useLazyQuery(GetTasksQuery)

  useEffect(() => {
    getTasks()
  }, [])

  const createTask: ICreateTask = async (task) => {
    const { data } = await createTaskAsync({
      variables: {
        title: task.title,
        description: task.description
      }
    })

    dispatch({ type: TaskActions.CREATE_TASK, payload: data.createTask })
    return data.createTask
  }

  const updateTask: IUpdateTask = async (task: ITask) => {
    dispatch({ type: TaskActions.UPDATE_TASK, payload: task })
    return task
  }

  const deleteTask: IDeleteTask = async (id) => {
    const taskToDelete = tasks.find((task) => task.id === id)

    if (!taskToDelete) {
      throw new Error('Task not found')
    }

    dispatch({ type: TaskActions.DELETE_TASK, payload: taskToDelete })
    return taskToDelete
  }

  const getTasks: IGetTasks = async () => {
    const { data } = await getTasksAsync()
    dispatch({ type: TaskActions.GET_TASKS, payload: data.getTasks })
    return data.getTasks as ITask[]
  }

  return (
    <TaskContext.Provider value={{ createTask, updateTask, deleteTask, getTasks, tasks }}>
      {children}
    </TaskContext.Provider>
  )
}
