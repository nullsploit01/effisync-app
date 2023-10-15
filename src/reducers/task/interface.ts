import { ITask } from 'src/interfaces/task'

export enum TaskActions {
  CREATE_TASK = 'CREATE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  DELETE_TASK = 'DELETE_TASK'
}

export type ITaskAction = {
  type: TaskActions
  payload: ITask
}

export type ITaskState = {
  tasks: ITask[]
}
