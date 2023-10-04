import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'

type ILoginValues = {
  email: string
  password: string
}

const LoginScreen = () => {
  const [_credentials, setValue] = React.useState<ILoginValues>({ email: '', password: '' })
  const [_secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true)

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!_secureTextEntry)
  }

  const renderEyeIcon = (): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon name={_secureTextEntry ? 'eye-off' : ''} />
    </TouchableWithoutFeedback>
  )

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
            // accessoryRight={renderEyeIcon}
            secureTextEntry={_secureTextEntry}
            onChangeText={(nextValue) => setValue({ ..._credentials, password: nextValue })}
          />
        </Layout>
        <Button>Login</Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 120
  },
  fieldContainer: {
    padding: 40,
    marginVertical: 120
  },
  input: {
    marginBottom: 26
  }
})

export default LoginScreen
