import { Text } from '@ui-kitten/components'
import React, { FC } from 'react'

import EModal from 'src/components/molecules/modal/emodal.molecule'

type ITaskCreatedModalProps = {
  visible: boolean
  onBackdropPress: () => void
}

const TaskAddedModal: FC<ITaskCreatedModalProps> = ({ visible, onBackdropPress }) => {
  return (
    <EModal visible={visible} onBackdropPress={onBackdropPress}>
      <Text>Task Added Successfully</Text>
    </EModal>
  )
}

export default TaskAddedModal
