import { useMutation } from '@apollo/client'
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { LoginMutation } from 'src/graphql/auth/mutation'

type ILoginValues = {
  email: string
  password: string
}

const LoginScreen = () => {
  const [_credentials, setValue] = React.useState<ILoginValues>({ email: '', password: '' })
  const [_secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true)

  const [login] = useMutation(LoginMutation)

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!_secureTextEntry)
  }

  const onLoginPress = () => {
    login({ variables: { email: _credentials.email, password: _credentials.password } })
  }

  return (
    <Layout style={styles.container}>
      <Layout style={styles.fieldContainer}>
        <Layout style={styles.input}>
          <Input
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
        <Button size="large" appearance="outline">
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

export default LoginScreen
