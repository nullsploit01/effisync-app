import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ITopNavigationBarProps = {
  title: string
  backIcon?: boolean
  accessoryRight?: () => React.ReactElement
  onBackPress?: () => void
}

const TopNavigationBar: FC<ITopNavigationBarProps> = ({
  title,
  backIcon,
  accessoryRight,
  onBackPress
}) => (
  <TopNavigation
    accessoryLeft={() =>
      backIcon ? (
        <TopNavigationAction onPress={onBackPress} icon={<Icon name="arrow-back" />} />
      ) : (
        <></>
      )
    }
    accessoryRight={accessoryRight}
    title={title}
  />
)

type ITopNavigationLayoutProps = {
  title: string
  children: React.ReactNode
  backIcon?: boolean
  onBackPress?: () => void
  accessoryRight?: () => React.ReactElement
}

const TopNavigationLayout: FC<ITopNavigationLayoutProps> = ({
  title,
  backIcon,
  accessoryRight,
  onBackPress,
  children
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationBar
        title={title}
        onBackPress={onBackPress}
        backIcon={backIcon}
        accessoryRight={accessoryRight}
      />
      {children}
    </SafeAreaView>
  )
}

export default TopNavigationLayout

const styles = StyleSheet.create({})
