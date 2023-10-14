import { Card, Layout, Modal } from '@ui-kitten/components'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { IEModalProps } from './interface'

const EModal: FC<IEModalProps> = ({ visible, onBackdropPress, children }) => {
  return (
    <Layout>
      <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={onBackdropPress}>
        <Card>{children}</Card>
      </Modal>
    </Layout>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
})

export default EModal
