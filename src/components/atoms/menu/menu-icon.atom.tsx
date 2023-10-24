import { Avatar } from '@ui-kitten/components'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { ImageUrls } from 'src/constants/image-urls.constant'
import { useAuthContext } from 'src/hooks/use-auth-context.hook'

type IMenuIconProps = {
  onPress?: () => void
}

const MenuIcon: FC<IMenuIconProps> = ({ onPress }) => {
  const { user } = useAuthContext()

  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar source={{ uri: user?.avatar ?? ImageUrls.defaultProfilePicture }} />
    </TouchableOpacity>
  )
}

export default MenuIcon
