import { NavigationProp } from '@react-navigation/native'
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components'
import { FC, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { screenNames } from 'src/constants/navigation.constants'
import { useAuthContext } from 'src/hooks/use-auth-context.hook'

type IRegisterValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type IRegisterPageProps = {
  navigation: NavigationProp<any, any>
}

const RegisterPage: FC<IRegisterPageProps> = ({ navigation }) => {
  const [_registrationInfo, setRegistrationInfo] = useState<IRegisterValues>({} as IRegisterValues)
  const [_secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

  const { register } = useAuthContext()

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!_secureTextEntry)
  }

  const onLoginPress = () => {
    navigation.navigate(screenNames.auth.login)
  }

  const onRegisterPress = () => {
    register(_registrationInfo.name, _registrationInfo.email, _registrationInfo.password)
  }

  return (
    <Layout style={styles.container}>
      <Layout style={styles.fieldContainer}>
        <Text style={{ textAlign: 'center', marginBottom: 75 }} status="primary" category="h2">
          Register
        </Text>
        <Layout style={styles.input}>
          <Input
            autoCapitalize="words"
            placeholder="Name"
            value={_registrationInfo.name}
            onChangeText={(nextValue) =>
              setRegistrationInfo({ ..._registrationInfo, name: nextValue })
            }
          />
        </Layout>
        <Layout style={styles.input}>
          <Input
            autoCapitalize="none"
            placeholder="Email"
            value={_registrationInfo.email}
            onChangeText={(nextValue) =>
              setRegistrationInfo({ ..._registrationInfo, email: nextValue })
            }
          />
        </Layout>
        <Layout style={styles.input}>
          <Input
            placeholder="Password"
            value={_registrationInfo.password}
            accessoryRight={
              <TouchableOpacity onPress={toggleSecureEntry}>
                <Icon name={_secureTextEntry ? 'eye-off' : 'eye'} />
              </TouchableOpacity>
            }
            secureTextEntry={_secureTextEntry}
            onChangeText={(nextValue) =>
              setRegistrationInfo({ ..._registrationInfo, password: nextValue })
            }
          />
        </Layout>
        <Layout style={styles.input}>
          <Input
            placeholder="Confirm Password"
            value={_registrationInfo.confirmPassword}
            accessoryRight={
              <TouchableOpacity onPress={toggleSecureEntry}>
                <Icon name={_secureTextEntry ? 'eye-off' : 'eye'} />
              </TouchableOpacity>
            }
            secureTextEntry={_secureTextEntry}
            onChangeText={(nextValue) =>
              setRegistrationInfo({ ..._registrationInfo, password: nextValue })
            }
          />
        </Layout>
        <Button size="large" onPress={onRegisterPress}>
          Register
        </Button>
        <View style={styles.seperator}>
          <View style={styles.border} />
          <Text appearance="hint" style={styles.text}>
            or
          </Text>
          <View style={styles.border} />
        </View>
        <Button onPress={onLoginPress} size="large" appearance="outline">
          Login
        </Button>
      </Layout>
    </Layout>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  fieldContainer: {
    paddingHorizontal: 40,
    paddingVertical: 80
  },
  input: {
    marginBottom: 20
  },
  seperator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10
  }
})
