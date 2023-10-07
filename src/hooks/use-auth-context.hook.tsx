import { useContext } from 'react'

import { AuthContext } from 'src/context/auth/auth.context'

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return authContext
}
