import { Card, Layout, Modal } from '@ui-kitten/components'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { IEModal } from './interface'

const EModal: FC<IEModal> = ({ visible, setVisible, children }) => {
  return (
    <Layout>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>{children}</Card>
      </Modal>
    </Layout>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})

export default EModal
