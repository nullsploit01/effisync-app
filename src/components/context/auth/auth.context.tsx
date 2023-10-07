import { useMutation } from '@apollo/client'
import { createContext, FC } from 'react'

import { LoginMutation } from 'src/graphql/auth/mutation'
import { useAuthReducer } from 'src/hooks/use-auth-reducer.hook'

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
      return data.login as IAuthResponse
    } catch (err) {
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
