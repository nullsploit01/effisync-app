import { ITaskAction, ITaskState, TaskActions } from './interface'

export const taskReducer = (state: ITaskState, action: ITaskAction) => {
  const { type, payload } = action

  switch (type) {
    case TaskActions.CREATE_TASK:
      return { tasks: [...state.tasks, payload] }

    case TaskActions.UPDATE_TASK:
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return payload
          }
          return task
        })
      }

    case TaskActions.DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== payload.id)
      }

    default:
      return state
  }
}
