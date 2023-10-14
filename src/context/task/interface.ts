import { ITask } from 'src/interfaces/task'

export type ITaskContext = {
  tasks: ITask[]
  createTask: ICreateTask
  updateTask: IUpdateTask
  getTasks: IGetTasks
  deleteTask: IDeleteTask
}

export type ITaskProviderProps = {
  children: React.ReactNode
}

export type ICreateTask = (values: ITask) => Promise<ITask>

export type IUpdateTask = (values: ITask) => Promise<ITask>

export type IDeleteTask = (id: string) => Promise<ITask>

export type IGetTasks = () => Promise<ITask[]>
