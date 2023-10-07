import { NavigationProp } from '@react-navigation/native'
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components'
import { FC, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { screenNames } from 'src/constants/navigation.constants'
import { useAuthContext } from 'src/hooks/use-auth-context.hook'

type ILoginValues = {
  email: string
  password: string
}

type ILandingPageProps = {
  navigation: NavigationProp<any, any>
}

const LoginPage: FC<ILandingPageProps> = ({ navigation }) => {
  const [_credentials, setValue] = useState<ILoginValues>({ email: '', password: '' })
  const [_secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

  const { login } = useAuthContext()

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!_secureTextEntry)
  }

  const onLoginPress = () => {
    login(_credentials.email, _credentials.password)
  }

  const onRegisterPress = () => {
    navigation.navigate(screenNames.auth.register)
  }

  return (
    <Layout style={styles.container}>
      <Layout style={styles.fieldContainer}>
        <Text style={{ textAlign: 'center', marginBottom: 75 }} status="primary" category="h2">
          Login
        </Text>
        <Layout style={styles.input}>
          <Input
            autoCapitalize="none"
            placeholder="Email"
            value={_credentials.email}
            onChangeText={(nextValue) => setValue({ ..._credentials, email: nextValue })}
          />
        </Layout>
        <Layout style={styles.input}>
          <Input
            placeholder="Password"
            value={_credentials.password}
            accessoryRight={
              <TouchableOpacity onPress={toggleSecureEntry}>
                <Icon name={_secureTextEntry ? 'eye-off' : 'eye'} />
              </TouchableOpacity>
            }
            secureTextEntry={_secureTextEntry}
            onChangeText={(nextValue) => setValue({ ..._credentials, password: nextValue })}
          />
        </Layout>
        <Button size="large" onPress={onLoginPress}>
          Login
        </Button>
        <View style={styles.seperator}>
          <View style={styles.border} />
          <Text appearance="hint" style={styles.text}>
            or
          </Text>
          <View style={styles.border} />
        </View>
        <Button onPress={onRegisterPress} size="large" appearance="outline">
          Register
        </Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 120
  },
  fieldContainer: {
    padding: 40
  },
  input: {
    marginBottom: 26
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

export default LoginPage
