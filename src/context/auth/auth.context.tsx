import { ApolloError, useMutation } from '@apollo/client'
import { createContext, FC } from 'react'

import { storageKeys } from 'src/constants/storage.constants'
import { LoginMutation } from 'src/graphql/auth/mutation'
import { useAuthReducer } from 'src/hooks/use-auth-reducer.hook'
import { AuthActions } from 'src/reducers/interface'
import { storageService } from 'src/services/storage.service'

import { IAuthContext, IAuthContextProvider, IAuthResponse, ILogin, IRegister } from './interface'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: FC<IAuthContextProvider> = ({ children }) => {
  const [state, dispatch] = useAuthReducer()
  const [loginCallback] = useMutation(LoginMutation)

  const register: IRegister = async (name, email, password) => {
    return {} as IAuthResponse
  }

  const login: ILogin = async (email, password) => {
    try {
      const { data } = await loginCallback({ variables: { email, password } })

      const authResponse = data?.login as IAuthResponse

      await storageService.set(storageKeys.auth.token, authResponse.token)
      dispatch({ type: AuthActions.LOGIN, payload: authResponse })

      return authResponse
    } catch (err) {
      if (err instanceof ApolloError) {
        throw new Error(err.message)
      }

      throw new Error("Couldn't login")
    }
  }

  const logout = async () => {}

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
