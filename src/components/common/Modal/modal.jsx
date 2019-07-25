/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-this-in-sfc */
import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

export const CustomModal = ({
  isOpen, cartModal, children,
}) => (
  <>
    <Modal
      isOpen={isOpen}
      style={cartModal}
    >
      { children }
    </Modal>
  </>
)
