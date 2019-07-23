import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#___gatsby')

const customStyles = {
  content: {
    top: '50%',
    left: 'auto',
    right: '0',
    bottom: 'auto',
    height: '100vh',
    borderRadius: 'none',
    maxWidth: '350px',
    width: '100%',
    transform: 'translateY(-50%)',
  },
}


export const CustomModal = ({ isOpen, children }) => (
  <>
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      { children }
    </Modal>
  </>
)
