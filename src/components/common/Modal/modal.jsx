import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

export const CustomModal = ({ isOpen, cartModal, children }) => (
  <>
    <Modal
      isOpen={isOpen}
      style={cartModal}
    >
      { children }
    </Modal>
  </>
)
