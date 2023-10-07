import { NavigationProp } from '@react-navigation/native'
import React, { FC } from 'react'

import RegisterPage from 'src/components/pages/auth/register/register.page'

type IRegisterScreenProps = {
  navigation: NavigationProp<any, any>
}

const RegisterScreen: FC<IRegisterScreenProps> = ({ navigation }) => {
  return <RegisterPage navigation={navigation} />
}

export default RegisterScreen
