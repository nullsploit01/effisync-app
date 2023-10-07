import { IAuthResponse } from 'src/context/auth/interface'
import { IUser } from 'src/interfaces/user'

export enum AuthActions {
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export type IAuthAction = {
  type: AuthActions
  payload: IAuthResponse
}

export type IAuthState = {
  user: IUser | null
  token: string | null
}
