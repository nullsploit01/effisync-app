import { IUser } from 'src/interfaces/user'

export type IAuthContext = {
  user: IUser | null
  login: ILogin
  register: IRegister
  logout: ILogout
}

export type IAuthResponse = {
  user: IUser
  token: string
}

export type ILogin = {
  (email: string, password: string): Promise<IAuthResponse>
}

export type IRegister = {
  (name: string, email: string, password: string): Promise<IAuthResponse>
}

export type ILogout = {
  (): Promise<void>
}

export type IAuthContextProvider = {
  children: React.ReactNode
}
