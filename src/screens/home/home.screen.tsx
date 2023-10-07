import { NavigationProp } from '@react-navigation/native'
import { FC } from 'react'

type IHomeScreenProps = {
  navigation: NavigationProp<any, any>
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  return <div>HomeScreen</div>
}

export default HomeScreen
