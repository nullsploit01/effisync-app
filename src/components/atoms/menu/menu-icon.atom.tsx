import { Avatar, Text } from '@ui-kitten/components'
import { FC } from 'react'

import { IUser } from 'src/interfaces/user'
import { getUserInitials } from 'src/utils/get-avatar.util'

type IMenuIconProps = {
  user: IUser
}

const MenuIcon: FC<IMenuIconProps> = ({ user }) => {
  if (user.avatar) {
    return <Avatar source={{ uri: user?.avatar }} />
  }

  return <Text>{getUserInitials(user)}</Text>
}

export default MenuIcon
