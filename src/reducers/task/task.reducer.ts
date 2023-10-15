import { ITaskAction, ITaskState, TaskActions } from './interface'

export const taskReducer = (state: ITaskState, action: ITaskAction) => {
  const { type, payload } = action

  switch (type) {
    case TaskActions.CREATE_TASK:
      if (Array.isArray(payload)) {
        throw new Error('Invalid task')
      }

      return { tasks: [...state.tasks, payload] }

    case TaskActions.UPDATE_TASK:
      if (Array.isArray(payload)) {
        throw new Error('Invalid task')
      }

      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return payload
          }
          return task
        })
      }

    case TaskActions.DELETE_TASK:
      if (Array.isArray(payload)) {
        throw new Error('Invalid task')
      }

      return {
        tasks: state.tasks.filter((task) => task.id !== payload.id)
      }

    case TaskActions.GET_TASKS:
      if (!Array.isArray(payload)) {
        throw new Error('Invalid tasks')
      }

      return { tasks: payload }

    default:
      return state
  }
}
