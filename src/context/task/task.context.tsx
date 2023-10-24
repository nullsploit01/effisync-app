import { useLazyQuery, useMutation } from '@apollo/client'
import { createContext, FC, useEffect, useState } from 'react'

import { CreateTaskMutation } from 'src/graphql/task/mutation'
import { GetTasksQuery } from 'src/graphql/task/query'
import { useAuthContext } from 'src/hooks/use-auth-context.hook'
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
  const { user } = useAuthContext()

  const [{ tasks }, dispatch] = useTaskReducer()

  const [createTaskAsync] = useMutation(CreateTaskMutation)
  const [getTasksAsync] = useLazyQuery(GetTasksQuery)

  const [_loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      getTasks()
    }
  }, [user])

  const createTask: ICreateTask = async (task) => {
    try {
      setLoading(true)
      const { data } = await createTaskAsync({
        variables: {
          title: task.title,
          description: task.description
        }
      })

      dispatch({ type: TaskActions.CREATE_TASK, payload: data.createTask })
      return data.createTask
    } finally {
      setLoading(false)
    }
  }

  const updateTask: IUpdateTask = async (task: ITask) => {
    try {
      setLoading(true)
      dispatch({ type: TaskActions.UPDATE_TASK, payload: task })
      return task
    } finally {
      setLoading(false)
    }
  }

  const deleteTask: IDeleteTask = async (id) => {
    try {
      setLoading(true)
      const taskToDelete = tasks.find((task) => task.id === id)

      if (!taskToDelete) {
        throw new Error('Task not found')
      }

      dispatch({ type: TaskActions.DELETE_TASK, payload: taskToDelete })
      return taskToDelete
    } finally {
      setLoading(false)
    }
  }

  const getTasks: IGetTasks = async () => {
    try {
      setLoading(true)
      const { data } = await getTasksAsync()
      dispatch({ type: TaskActions.GET_TASKS, payload: data.getTasks })
      return data.getTasks as ITask[]
    } finally {
      setLoading(false)
    }
  }

  return (
    <TaskContext.Provider
      value={{ createTask, updateTask, deleteTask, getTasks, tasks, loading: _loading }}
    >
      {children}
    </TaskContext.Provider>
  )
}
