import { IUser } from 'src/interfaces/user'

export const getUserInitials = ({ name }: IUser) => {
  if (!name) return ''

  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}${lastName[0]}`.toUpperCase()
}
