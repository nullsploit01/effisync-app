import { ApolloError, useLazyQuery, useMutation } from '@apollo/client'
import { createContext, FC, useEffect } from 'react'

import { storageKeys } from 'src/constants/storage.constants'
import { LoginMutation } from 'src/graphql/auth/mutation'
import { ProfileQuery } from 'src/graphql/auth/query'
import { useAuthReducer } from 'src/hooks/use-auth-reducer.hook'
import { IUser } from 'src/interfaces/user'
import { AuthActions } from 'src/reducers/interface'
import { storageService } from 'src/services/storage.service'

import {
  IAuthContext,
  IAuthContextProvider,
  IAuthResponse,
  IGetProfile,
  ILogin,
  IRegister
} from './interface'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: FC<IAuthContextProvider> = ({ children }) => {
  const [state, dispatch] = useAuthReducer()
  const [loginCallback] = useMutation(LoginMutation)
  const [profileCallback] = useLazyQuery(ProfileQuery)

  useEffect(() => {
    getProfile()
  }, [])

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

  const getProfile: IGetProfile = async () => {
    const { token } = await storageService.get(storageKeys.auth.token)

    if (!token) {
      return null
    }

    const { data, error } = await profileCallback()

    if (error) {
      throw new Error(error.message)
    }

    const user = data?.userProfile as IUser
    dispatch({ type: AuthActions.LOGIN, payload: { user, token } })
    return user
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout, register, getProfile }}>
      {children}
    </AuthContext.Provider>
  )
}
