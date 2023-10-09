import { NavigationProp } from '@react-navigation/native'
import { FC } from 'react'

import HomePage from 'src/components/pages/home/home.page'

type IHomeScreenProps = {
  navigation: NavigationProp<any, any>
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  return <HomePage />
}

export default HomeScreen
