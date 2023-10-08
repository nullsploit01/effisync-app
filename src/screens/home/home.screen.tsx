import { NavigationProp } from '@react-navigation/native'
import { Text } from '@ui-kitten/components'
import { FC, useEffect } from 'react'

import { useAuthContext } from 'src/hooks/use-auth-context.hook'

type IHomeScreenProps = {
  navigation: NavigationProp<any, any>
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  const { getProfile } = useAuthContext()
  useEffect(() => {
    getProfile()
  }, [])
  return <Text>HomeScreen</Text>
}

export default HomeScreen
