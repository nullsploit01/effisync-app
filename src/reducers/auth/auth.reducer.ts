import { AuthActions, IAuthAction, IAuthState } from './interface'

export const authreducer = (state: IAuthState, action: IAuthAction) => {
  const { type, payload } = action

  switch (type) {
    case AuthActions.REGISTER:
      return { user: payload.user, token: payload.token }

    case AuthActions.LOGIN:
      return { user: payload.user, token: payload.token }

    case AuthActions.LOGOUT:
      return { user: null, token: null }

    default:
      return state
  }
}
