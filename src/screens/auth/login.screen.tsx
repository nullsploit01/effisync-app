import { NavigationProp } from '@react-navigation/native'
import { FC } from 'react'

import LoginPage from 'src/components/pages/auth/login/login.page'

type ILoginScreenProps = {
  navigation: NavigationProp<any, any>
}

const LoginScreen: FC<ILoginScreenProps> = ({ navigation }) => {
  return <LoginPage navigation={navigation} />
}

export default LoginScreen
