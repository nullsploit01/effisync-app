import { useReducer } from 'react'

import { authreducer } from 'src/reducers/auth/auth.reducer'

export const useAuthReducer = () => {
  const initialState = {
    user: null,
    token: null
  }

  return useReducer(authreducer, initialState)
}
