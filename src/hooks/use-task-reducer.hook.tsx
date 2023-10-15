import { useReducer } from 'react'

import { taskReducer } from 'src/reducers/task/task.reducer'

export const useTaskReducer = () => {
  const initialState = {
    tasks: []
  }

  return useReducer(taskReducer, initialState)
}
