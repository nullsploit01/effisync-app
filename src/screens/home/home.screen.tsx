import { NavigationProp } from '@react-navigation/native'
import { Text } from '@ui-kitten/components'
import { FC } from 'react'

type IHomeScreenProps = {
  navigation: NavigationProp<any, any>
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  return <Text>HomeScreen</Text>
}

export default HomeScreen
