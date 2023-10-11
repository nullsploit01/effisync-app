import { NavigationProp, RouteProp } from '@react-navigation/native'
import { FC } from 'react'

import HomePage from 'src/components/pages/home/home.page'
import { IUser } from 'src/interfaces/user'

type IHomeScreenProps = {
  navigation: NavigationProp<any, any>
  route: RouteProp<{ params: { user: IUser } }, 'params'>
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation, route }) => {
  return <HomePage navigation={navigation} user={route.params.user} />
}

export default HomeScreen
